import React, { useState } from 'react';
import { BookOpen, Users, Eye, Download, Search, Filter, Save, CheckCircle, Clock, DollarSign, Phone } from 'lucide-react';

const AdminGuide: React.FC = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const sections = [
    {
      id: 'overview',
      title: 'Overview',
      icon: BookOpen,
      content: (
        <div className="space-y-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="font-semibold text-blue-900 mb-2">Welcome to NMG Admin Dashboard</h3>
            <p className="text-blue-800 text-sm">
              This is your complete CRM system for managing customer inquiries and leads. 
              All forms from your website automatically create leads here for you to track and manage.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <Users className="w-5 h-5 text-blue-600 mr-2" />
                <h4 className="font-semibold text-gray-900">Lead Management</h4>
              </div>
              <p className="text-sm text-gray-600">Track all customer inquiries from your website forms</p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <Eye className="w-5 h-5 text-green-600 mr-2" />
                <h4 className="font-semibold text-gray-900">Status Tracking</h4>
              </div>
              <p className="text-sm text-gray-600">Update lead status as you progress through sales</p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <Download className="w-5 h-5 text-purple-600 mr-2" />
                <h4 className="font-semibold text-gray-900">Export Data</h4>
              </div>
              <p className="text-sm text-gray-600">Download leads as CSV for external tracking</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'leads',
      title: 'Managing Leads',
      icon: Users,
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Lead Status Workflow</h3>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800 border border-blue-200 mr-3">
                    <span className="mr-1">🆕</span>New
                  </span>
                  <span className="text-sm text-gray-600">Customer submits inquiry → Review and prepare response</span>
                </div>
                <div className="flex items-center">
                  <span className="inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800 border border-yellow-200 mr-3">
                    <span className="mr-1">📞</span>Contacted
                  </span>
                  <span className="text-sm text-gray-600">Called/emailed customer → Discuss requirements</span>
                </div>
                <div className="flex items-center">
                  <span className="inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full bg-purple-100 text-purple-800 border border-purple-200 mr-3">
                    <span className="mr-1">💰</span>Quoted
                  </span>
                  <span className="text-sm text-gray-600">Sent quote → Follow up on pricing</span>
                </div>
                <div className="flex items-center">
                  <span className="inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800 border border-green-200 mr-3">
                    <span className="mr-1">✅</span>Closed
                  </span>
                  <span className="text-sm text-gray-600">Deal won/lost → Project completed or lost</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Quick Actions</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Quick Status Update</h4>
                <p className="text-sm text-gray-600 mb-3">Use the dropdown in the Actions column to quickly change lead status without opening details.</p>
                <div className="bg-gray-50 p-2 rounded text-xs font-mono">
                  Actions → Dropdown → Select Status → Auto-saves
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">View Full Details</h4>
                <p className="text-sm text-gray-600 mb-3">Click the eye icon to see complete lead information and add notes.</p>
                <div className="bg-gray-50 p-2 rounded text-xs font-mono">
                  Actions → Eye Icon → Modal → Add Notes → Save
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'search',
      title: 'Search & Filter',
      icon: Search,
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Finding Leads</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <Search className="w-5 h-5 text-blue-600 mr-2" />
                  <h4 className="font-semibold text-gray-900">Search by Name/Email</h4>
                </div>
                <p className="text-sm text-gray-600 mb-3">Type any part of a customer's name or email address to find their lead.</p>
                <div className="bg-gray-50 p-2 rounded text-xs">
                  Example: "john" will find "John Smith" or "john@email.com"
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <Filter className="w-5 h-5 text-green-600 mr-2" />
                  <h4 className="font-semibold text-gray-900">Filter by Status/Product</h4>
                </div>
                <p className="text-sm text-gray-600 mb-3">Use dropdowns to show only leads with specific status or product interest.</p>
                <div className="bg-gray-50 p-2 rounded text-xs">
                  Example: "New" + "Sauna" = Only new sauna inquiries
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Export Data</h3>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <Download className="w-5 h-5 text-purple-600 mr-2" />
                <h4 className="font-semibold text-gray-900">Download CSV</h4>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Export your leads to Excel or other spreadsheet software. The export includes all lead information and respects your current search/filter settings.
              </p>
              <div className="bg-gray-50 p-2 rounded text-xs">
                Click "Export CSV" → File downloads → Open in Excel/Google Sheets
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'best-practices',
      title: 'Best Practices',
      icon: CheckCircle,
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Daily Workflow</h3>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Check New Leads</h4>
                    <p className="text-sm text-gray-600">Start each day by reviewing new inquiries and updating status to "Contacted"</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Follow Up</h4>
                    <p className="text-sm text-gray-600">Contact customers within 24 hours of their inquiry</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Add Notes</h4>
                    <p className="text-sm text-gray-600">Document all conversations and customer preferences</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">4</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Update Status</h4>
                    <p className="text-sm text-gray-600">Move leads through the pipeline as you progress</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Tips for Success</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">📝 Detailed Notes</h4>
                <p className="text-sm text-gray-600">Always add notes about customer requirements, budget, timeline, and any special requests.</p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">⏰ Quick Response</h4>
                <p className="text-sm text-gray-600">Respond to new leads within 24 hours to maintain high customer satisfaction.</p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">📊 Regular Reviews</h4>
                <p className="text-sm text-gray-600">Weekly: Review all leads and identify any that need follow-up attention.</p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">💾 Export Backups</h4>
                <p className="text-sm text-gray-600">Monthly: Export your leads data as a backup and for performance analysis.</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'troubleshooting',
      title: 'Troubleshooting',
      icon: Clock,
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Common Issues</h3>
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Can't Update Lead Status?</h4>
                <p className="text-sm text-gray-600 mb-2">Make sure you're logged in and try refreshing the page.</p>
                <p className="text-sm text-gray-500">If the problem persists, contact your web developer.</p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Search Not Working?</h4>
                <p className="text-sm text-gray-600 mb-2">Try typing just part of the name or email address.</p>
                <p className="text-sm text-gray-500">Clear any filters first, then search.</p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Export Not Downloading?</h4>
                <p className="text-sm text-gray-600 mb-2">Check your browser's download settings and popup blockers.</p>
                <p className="text-sm text-gray-500">Try using a different browser if the issue continues.</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Need Help?</h3>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-blue-800 text-sm mb-3">
                If you encounter any issues or need additional features, contact your web developer:
              </p>
              <div className="text-blue-800 text-sm">
                <p>📧 Email: bailey.barry@roseyco.com</p>
                <p>📱 Phone: 07722432679</p>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Admin Guide</h1>
        <p className="text-gray-600">Complete guide to using the NMG CRM system</p>
      </div>

      {/* Navigation Tabs */}
      <div className="border-b border-gray-200 mb-8">
        <nav className="flex space-x-8 overflow-x-auto">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`flex items-center py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                activeSection === section.id
                  ? 'border-[#222126] text-[#222126]'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <section.icon className="w-4 h-4 mr-2" />
              {section.title}
            </button>
          ))}
        </nav>
      </div>

      {/* Content */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6">
          {sections.find(s => s.id === activeSection)?.content}
        </div>
      </div>
    </div>
  );
};

export default AdminGuide; 