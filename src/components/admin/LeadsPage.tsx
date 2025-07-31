import React, { useState, useEffect, useRef } from 'react';
import { supabase, Lead, LeadUpdate } from '../../lib/supabase';
import { Search, Filter, Download, Eye, X, Save, Upload, Plus } from 'lucide-react';

const LeadsPage: React.FC = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [filteredLeads, setFilteredLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [productFilter, setProductFilter] = useState('');
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [editingLead, setEditingLead] = useState<LeadUpdate>({});
  const [saving, setSaving] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState('');
  const [uploadSuccess, setUploadSuccess] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetchLeads();
  }, []);

  useEffect(() => {
    filterLeads();
  }, [leads, searchTerm, statusFilter, productFilter]);

  const fetchLeads = async () => {
    try {
      const { data, error } = await supabase
        .from('leads')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setLeads(data || []);
    } catch (error) {
      console.error('Error fetching leads:', error);
    } finally {
      setLoading(false);
    }
  };

  const filterLeads = () => {
    let filtered = leads;

    if (searchTerm) {
      filtered = filtered.filter(lead =>
        lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (statusFilter) {
      filtered = filtered.filter(lead => lead.status === statusFilter);
    }

    if (productFilter) {
      filtered = filtered.filter(lead => lead.product === productFilter);
    }

    setFilteredLeads(filtered);
  };

  const exportCSV = () => {
    const headers = ['Name', 'Email', 'Phone', 'Product', 'Status', 'Message', 'Created Date'];
    const csvContent = [
      headers.join(','),
      ...filteredLeads.map(lead => [
        `"${lead.name}"`,
        `"${lead.email}"`,
        `"${lead.phone || ''}"`,
        `"${lead.product}"`,
        `"${lead.status}"`,
        `"${lead.message.replace(/"/g, '""')}"`,
        `"${new Date(lead.created_at).toLocaleDateString()}"`
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `nmg-leads-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const openLeadModal = (lead: Lead) => {
    setSelectedLead(lead);
    setEditingLead({
      status: lead.status,
      notes: lead.notes || '',
    });
  };

  const closeLeadModal = () => {
    setSelectedLead(null);
    setEditingLead({});
  };

  const saveLead = async () => {
    if (!selectedLead) return;

    setSaving(true);
    try {
      const { error } = await supabase
        .from('leads')
        .update(editingLead)
        .eq('id', selectedLead.id);

      if (error) throw error;

      // Update local state
      setLeads(leads.map(lead =>
        lead.id === selectedLead.id
          ? { ...lead, ...editingLead }
          : lead
      ));

      closeLeadModal();
    } catch (error) {
      console.error('Error updating lead:', error);
    } finally {
      setSaving(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'New': return 'bg-blue-100 text-blue-800 border border-blue-200';
      case 'Contacted': return 'bg-yellow-100 text-yellow-800 border border-yellow-200';
      case 'Quoted': return 'bg-purple-100 text-purple-800 border border-purple-200';
      case 'Closed': return 'bg-green-100 text-green-800 border border-green-200';
      default: return 'bg-gray-100 text-gray-800 border border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'New': return '🆕';
      case 'Contacted': return '📞';
      case 'Quoted': return '💰';
      case 'Closed': return '✅';
      default: return '📋';
    }
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setUploadError('');
    setUploadSuccess('');

    try {
      const text = await file.text();
      const lines = text.split('\n');
      const headers = lines[0].split(',').map(h => h.trim().replace(/"/g, ''));
      
      // Validate headers
      const requiredHeaders = ['name', 'email', 'product'];
      const missingHeaders = requiredHeaders.filter(h => !headers.includes(h));
      
      if (missingHeaders.length > 0) {
        throw new Error(`Missing required columns: ${missingHeaders.join(', ')}`);
      }

      const leads = [];
      let successCount = 0;
      let errorCount = 0;

      for (let i = 1; i < lines.length; i++) {
        if (!lines[i].trim()) continue;
        
        const values = lines[i].split(',').map(v => v.trim().replace(/"/g, ''));
        const lead = {
          name: values[headers.indexOf('name')] || '',
          email: values[headers.indexOf('email')] || '',
          phone: values[headers.indexOf('phone')] || null,
          product: values[headers.indexOf('product')] || 'General',
          message: values[headers.indexOf('message')] || '',
          status: values[headers.indexOf('status')] || 'New',
          source: values[headers.indexOf('source')] || 'CSV Upload',
          notes: values[headers.indexOf('notes')] || null
        };

        // Validate required fields
        if (!lead.name || !lead.email) {
          errorCount++;
          continue;
        }

        // Validate product
        if (!['Sauna', 'Grill Pod', 'Shed', 'General'].includes(lead.product)) {
          lead.product = 'General';
        }

        // Validate status
        if (!['New', 'Contacted', 'Quoted', 'Closed'].includes(lead.status)) {
          lead.status = 'New';
        }

        try {
          const { error } = await supabase
            .from('leads')
            .insert(lead);

          if (error) {
            console.error('Error inserting lead:', error);
            errorCount++;
          } else {
            successCount++;
            leads.push(lead);
          }
        } catch (error) {
          console.error('Error inserting lead:', error);
          errorCount++;
        }
      }

      if (successCount > 0) {
        setUploadSuccess(`Successfully uploaded ${successCount} leads${errorCount > 0 ? ` (${errorCount} failed)` : ''}`);
        // Refresh leads list
        fetchLeads();
        // Close modal after 2 seconds
        setTimeout(() => {
          setShowUploadModal(false);
          setUploadSuccess('');
        }, 2000);
      } else {
        setUploadError('No leads were uploaded successfully');
      }

    } catch (error) {
      console.error('Upload error:', error);
      setUploadError(error instanceof Error ? error.message : 'Failed to upload file');
    } finally {
      setUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const downloadTemplate = () => {
    const headers = ['name', 'email', 'phone', 'product', 'message', 'status', 'source', 'notes'];
    const example = ['John Smith', 'john@example.com', '+44 7911 123456', 'Sauna', 'Interested in garden sauna', 'New', 'Website', 'Initial inquiry'];
    
    const csvContent = [
      headers.join(','),
      example.join(',')
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'nmg-leads-template.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#222126]"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Leads</h1>
        <p className="text-gray-600">Manage customer inquiries and leads</p>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#222126] focus:border-transparent"
            />
          </div>

          {/* Status Filter */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#222126] focus:border-transparent"
          >
            <option value="">All Statuses</option>
            <option value="New">New</option>
            <option value="Contacted">Contacted</option>
            <option value="Quoted">Quoted</option>
            <option value="Closed">Closed</option>
          </select>

          {/* Product Filter */}
          <select
            value={productFilter}
            onChange={(e) => setProductFilter(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#222126] focus:border-transparent"
          >
            <option value="">All Products</option>
            <option value="Sauna">Sauna</option>
            <option value="Grill Pod">Grill Pod</option>
            <option value="Shed">Shed</option>
            <option value="General">General</option>
          </select>

          {/* Upload Button */}
          <button
            onClick={() => setShowUploadModal(true)}
            className="flex items-center justify-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            <Upload className="w-4 h-4 mr-2" />
            Upload Leads
          </button>

          {/* Export Button */}
          <button
            onClick={exportCSV}
            className="flex items-center justify-center px-4 py-2 bg-[#222126] text-white rounded-lg hover:bg-[#222126]/90 transition-colors"
          >
            <Download className="h-4 w-4 mr-2" />
            Export CSV
          </button>
        </div>
      </div>

      {/* Results Summary */}
      <div className="mb-4">
        <p className="text-sm text-gray-600">
          Showing {filteredLeads.length} of {leads.length} leads
        </p>
      </div>

      {/* Leads Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Phone
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Product
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Created
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredLeads.map((lead) => (
                <tr key={lead.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {lead.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {lead.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {lead.phone || '-'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {lead.product}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(lead.status)}`}>
                      <span className="mr-1">{getStatusIcon(lead.status)}</span>
                      {lead.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(lead.created_at).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => openLeadModal(lead)}
                        className="text-[#222126] hover:text-[#222126]/80 transition-colors"
                        title="View Details"
                      >
                        <Eye className="h-4 w-4" />
                      </button>
                      <select
                        value={lead.status}
                        onChange={async (e) => {
                          const newStatus = e.target.value;
                          console.log('Updating lead status:', lead.id, 'from', lead.status, 'to', newStatus);
                          
                          try {
                            const { data, error } = await supabase
                              .from('leads')
                              .update({ status: newStatus })
                              .eq('id', lead.id)
                              .select();
                            
                            if (error) {
                              console.error('Supabase error:', error);
                              throw error;
                            }
                            
                            console.log('Update successful:', data);
                            
                            // Update local state
                            setLeads(leads.map(l =>
                              l.id === lead.id ? { ...l, status: newStatus } : l
                            ));
                            
                            // Also update filtered leads
                            setFilteredLeads(filteredLeads.map(l =>
                              l.id === lead.id ? { ...l, status: newStatus } : l
                            ));
                            
                          } catch (error) {
                            console.error('Error updating status:', error);
                            alert('Failed to update status. Please try again.');
                          }
                        }}
                        className="text-xs border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-[#222126]"
                      >
                        <option value="New">New</option>
                        <option value="Contacted">Contacted</option>
                        <option value="Quoted">Quoted</option>
                        <option value="Closed">Closed</option>
                      </select>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredLeads.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No leads found matching your criteria.</p>
          </div>
        )}
      </div>

      {/* Lead Detail Modal */}
      {selectedLead && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">Lead Details</h2>
              <button
                onClick={closeLeadModal}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Lead Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <p className="text-sm text-gray-900">{selectedLead.name}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <p className="text-sm text-gray-900">{selectedLead.email}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <p className="text-sm text-gray-900">{selectedLead.phone || 'Not provided'}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Product Interest</label>
                  <p className="text-sm text-gray-900">{selectedLead.product}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Source</label>
                  <p className="text-sm text-gray-900">{selectedLead.source || 'Website'}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Created Date</label>
                  <p className="text-sm text-gray-900">{new Date(selectedLead.created_at).toLocaleString()}</p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <p className="text-sm text-gray-900 bg-gray-50 p-3 rounded-lg">{selectedLead.message}</p>
              </div>

              {/* Editable Fields */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Update Lead</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                    <select
                      value={editingLead.status || selectedLead.status}
                      onChange={(e) => setEditingLead({ ...editingLead, status: e.target.value as Lead['status'] })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#222126] focus:border-transparent"
                    >
                      <option value="New">New</option>
                      <option value="Contacted">Contacted</option>
                      <option value="Quoted">Quoted</option>
                      <option value="Closed">Closed</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Internal Notes</label>
                    <textarea
                      value={editingLead.notes || ''}
                      onChange={(e) => setEditingLead({ ...editingLead, notes: e.target.value })}
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#222126] focus:border-transparent"
                      placeholder="Add internal notes about this lead..."
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end space-x-3 p-6 border-t border-gray-200">
              <button
                onClick={closeLeadModal}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={saveLead}
                disabled={saving}
                className="flex items-center px-4 py-2 text-sm font-medium text-white bg-[#222126] rounded-lg hover:bg-[#222126]/90 transition-colors disabled:opacity-50"
              >
                {saving ? (
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                ) : (
                  <Save className="h-4 w-4 mr-2" />
                )}
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">Upload Leads</h2>
              <button
                onClick={() => setShowUploadModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Upload CSV File</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Upload a CSV file with lead information. Required columns: name, email, product.
                </p>
                
                <div className="space-y-3">
                  <button
                    onClick={downloadTemplate}
                    className="flex items-center text-sm text-blue-600 hover:text-blue-800"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download CSV Template
                  </button>
                  
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept=".csv"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      disabled={uploading}
                      className="flex items-center justify-center w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
                    >
                      {uploading ? (
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      ) : (
                        <Upload className="w-4 h-4 mr-2" />
                      )}
                      {uploading ? 'Uploading...' : 'Choose CSV File'}
                    </button>
                  </div>
                </div>
              </div>

              {uploadError && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                  {uploadError}
                </div>
              )}

              {uploadSuccess && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
                  {uploadSuccess}
                </div>
              )}

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">CSV Format:</h4>
                <div className="text-xs text-gray-600 space-y-1">
                  <p><strong>Required:</strong> name, email, product</p>
                  <p><strong>Optional:</strong> phone, message, status, source, notes</p>
                  <p><strong>Products:</strong> Sauna, Grill Pod, Shed, General</p>
                  <p><strong>Status:</strong> New, Contacted, Quoted, Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeadsPage;