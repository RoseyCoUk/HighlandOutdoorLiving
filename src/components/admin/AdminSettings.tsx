import React, { useState, useEffect } from 'react';
import { Settings, User, Bell, Shield, Save, Eye, EyeOff, LogOut } from 'lucide-react';
import { supabase } from '../../lib/supabase';

const AdminSettings: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  // Account Settings
  const [accountSettings, setAccountSettings] = useState({
    displayName: '',
    email: '',
    phone: ''
  });

  // Notification Settings
  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    newLeadAlerts: true,
    dailyDigest: false,
    weeklyReport: true
  });

  // Security Settings
  const [securitySettings, setSecuritySettings] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  // System Settings
  const [systemSettings, setSystemSettings] = useState({
    autoRefresh: true,
    refreshInterval: 30,
    defaultStatus: 'New',
    exportFormat: 'CSV'
  });

  useEffect(() => {
    fetchUserData();
    loadSavedSettings();
  }, []);

  const loadSavedSettings = () => {
    try {
      // Load notification settings
      const savedNotifications = localStorage.getItem('nmg-notification-settings');
      if (savedNotifications) {
        setNotificationSettings(JSON.parse(savedNotifications));
      }

      // Load system settings
      const savedSystem = localStorage.getItem('nmg-system-settings');
      if (savedSystem) {
        setSystemSettings(JSON.parse(savedSystem));
      }
    } catch (error) {
      console.error('Error loading saved settings:', error);
    }
  };

  const fetchUserData = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setUser(user);
        setAccountSettings({
          displayName: user.user_metadata?.full_name || '',
          email: user.email || '',
          phone: user.user_metadata?.phone || ''
        });
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    } finally {
      setLoading(false);
    }
  };

  const saveAccountSettings = async () => {
    setSaving(true);
    try {
      const { error } = await supabase.auth.updateUser({
        data: {
          full_name: accountSettings.displayName,
          phone: accountSettings.phone
        }
      });

      if (error) throw error;
      showMessage('success', 'Account settings updated successfully!');
    } catch (error) {
      console.error('Error updating account:', error);
      showMessage('error', 'Failed to update account settings');
    } finally {
      setSaving(false);
    }
  };

  const saveSecuritySettings = async () => {
    if (securitySettings.newPassword !== securitySettings.confirmPassword) {
      showMessage('error', 'New passwords do not match');
      return;
    }

    if (securitySettings.newPassword.length < 6) {
      showMessage('error', 'Password must be at least 6 characters');
      return;
    }

    if (!securitySettings.newPassword.trim()) {
      showMessage('error', 'Please enter a new password');
      return;
    }

    setSaving(true);
    try {
      const { error } = await supabase.auth.updateUser({
        password: securitySettings.newPassword
      });

      if (error) {
        console.error('Supabase error:', error);
        if (error.message.includes('re-authenticate')) {
          showMessage('error', 'Please log out and log back in to change your password');
        } else {
          throw error;
        }
        return;
      }
      
      showMessage('success', 'Password updated successfully!');
      setSecuritySettings({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
      });
    } catch (error) {
      console.error('Error updating password:', error);
      showMessage('error', 'Failed to update password. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const saveNotificationSettings = async () => {
    setSaving(true);
    try {
      // Save to localStorage for now (could be moved to database later)
      localStorage.setItem('nmg-notification-settings', JSON.stringify(notificationSettings));
      showMessage('success', 'Notification settings saved!');
    } catch (error) {
      console.error('Error saving notifications:', error);
      showMessage('error', 'Failed to save notification settings');
    } finally {
      setSaving(false);
    }
  };

  const saveSystemSettings = async () => {
    setSaving(true);
    try {
      // Save to localStorage for now (could be moved to database later)
      localStorage.setItem('nmg-system-settings', JSON.stringify(systemSettings));
      showMessage('success', 'System settings saved!');
    } catch (error) {
      console.error('Error saving system settings:', error);
      showMessage('error', 'Failed to save system settings');
    } finally {
      setSaving(false);
    }
  };

  const showMessage = (type: string, text: string) => {
    setMessage({ type, text });
    setTimeout(() => setMessage({ type: '', text: '' }), 3000);
  };

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      // The AdminLayout will handle the redirect
    } catch (error) {
      console.error('Error signing out:', error);
      showMessage('error', 'Error signing out. Please try again.');
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#222126]"></div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600">Manage your admin preferences and configuration</p>
      </div>

      {/* Message Display */}
      {message.text && (
        <div className={`mb-6 p-4 rounded-lg ${
          message.type === 'success' 
            ? 'bg-green-50 border border-green-200 text-green-700' 
            : 'bg-red-50 border border-red-200 text-red-700'
        }`}>
          {message.text}
        </div>
      )}

      {/* Settings Sections */}
      <div className="space-y-6">
        {/* Account Settings */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <User className="h-5 w-5 text-gray-400 mr-2" />
              <h2 className="text-lg font-semibold text-gray-900">Account Settings</h2>
            </div>
            <button
              onClick={saveAccountSettings}
              disabled={saving}
              className="flex items-center px-4 py-2 bg-[#222126] text-white rounded-lg hover:bg-[#222126]/90 transition-colors disabled:opacity-50"
            >
              <Save className="w-4 h-4 mr-2" />
              {saving ? 'Saving...' : 'Save'}
            </button>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Display Name</label>
              <input
                type="text"
                value={accountSettings.displayName}
                onChange={(e) => setAccountSettings({ ...accountSettings, displayName: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#222126] focus:border-transparent"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                value={accountSettings.email}
                disabled
                className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-500"
              />
              <p className="text-xs text-gray-500 mt-1">Email cannot be changed</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
              <input
                type="tel"
                value={accountSettings.phone}
                onChange={(e) => setAccountSettings({ ...accountSettings, phone: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#222126] focus:border-transparent"
                placeholder="+44 7911 123456"
              />
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Bell className="h-5 w-5 text-gray-400 mr-2" />
              <h2 className="text-lg font-semibold text-gray-900">Notifications</h2>
            </div>
            <button
              onClick={saveNotificationSettings}
              disabled={saving}
              className="flex items-center px-4 py-2 bg-[#222126] text-white rounded-lg hover:bg-[#222126]/90 transition-colors disabled:opacity-50"
            >
              <Save className="w-4 h-4 mr-2" />
              {saving ? 'Saving...' : 'Save'}
            </button>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-gray-900">Email Notifications</h3>
                <p className="text-sm text-gray-600">Receive notifications via email</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={notificationSettings.emailNotifications}
                  onChange={(e) => setNotificationSettings({ ...notificationSettings, emailNotifications: e.target.checked })}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#222126]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#222126]"></div>
              </label>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-gray-900">New Lead Alerts</h3>
                <p className="text-sm text-gray-600">Get notified when new leads come in</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={notificationSettings.newLeadAlerts}
                  onChange={(e) => setNotificationSettings({ ...notificationSettings, newLeadAlerts: e.target.checked })}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#222126]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#222126]"></div>
              </label>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-gray-900">Daily Digest</h3>
                <p className="text-sm text-gray-600">Receive daily summary of new leads</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={notificationSettings.dailyDigest}
                  onChange={(e) => setNotificationSettings({ ...notificationSettings, dailyDigest: e.target.checked })}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#222126]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#222126]"></div>
              </label>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-gray-900">Weekly Report</h3>
                <p className="text-sm text-gray-600">Receive weekly performance summary</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={notificationSettings.weeklyReport}
                  onChange={(e) => setNotificationSettings({ ...notificationSettings, weeklyReport: e.target.checked })}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#222126]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#222126]"></div>
              </label>
            </div>
          </div>
        </div>

        {/* Security */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Shield className="h-5 w-5 text-gray-400 mr-2" />
              <h2 className="text-lg font-semibold text-gray-900">Security</h2>
            </div>
            <button
              onClick={saveSecuritySettings}
              disabled={saving}
              className="flex items-center px-4 py-2 bg-[#222126] text-white rounded-lg hover:bg-[#222126]/90 transition-colors disabled:opacity-50"
            >
              <Save className="w-4 h-4 mr-2" />
              {saving ? 'Saving...' : 'Save'}
            </button>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={securitySettings.newPassword}
                  onChange={(e) => setSecuritySettings({ ...securitySettings, newPassword: e.target.value })}
                  className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#222126] focus:border-transparent"
                  placeholder="Enter new password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? <EyeOff className="h-4 w-4 text-gray-400" /> : <Eye className="h-4 w-4 text-gray-400" />}
                </button>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
              <input
                type="password"
                value={securitySettings.confirmPassword}
                onChange={(e) => setSecuritySettings({ ...securitySettings, confirmPassword: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#222126] focus:border-transparent"
                placeholder="Confirm new password"
              />
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-medium text-blue-900 mb-2">Password Requirements</h3>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Minimum 6 characters</li>
                <li>• Use a mix of letters, numbers, and symbols</li>
                <li>• Avoid common passwords</li>
              </ul>
            </div>
          </div>
        </div>

        {/* System Settings */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Settings className="h-5 w-5 text-gray-400 mr-2" />
              <h2 className="text-lg font-semibold text-gray-900">System Settings</h2>
            </div>
            <button
              onClick={saveSystemSettings}
              disabled={saving}
              className="flex items-center px-4 py-2 bg-[#222126] text-white rounded-lg hover:bg-[#222126]/90 transition-colors disabled:opacity-50"
            >
              <Save className="w-4 h-4 mr-2" />
              {saving ? 'Saving...' : 'Save'}
            </button>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Default Lead Status</label>
              <select
                value={systemSettings.defaultStatus}
                onChange={(e) => setSystemSettings({ ...systemSettings, defaultStatus: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#222126] focus:border-transparent"
              >
                <option value="New">New</option>
                <option value="Contacted">Contacted</option>
                <option value="Quoted">Quoted</option>
                <option value="Closed">Closed</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Export Format</label>
              <select
                value={systemSettings.exportFormat}
                onChange={(e) => setSystemSettings({ ...systemSettings, exportFormat: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#222126] focus:border-transparent"
              >
                <option value="CSV">CSV</option>
                <option value="Excel">Excel</option>
                <option value="PDF">PDF</option>
              </select>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-gray-900">Auto Refresh</h3>
                <p className="text-sm text-gray-600">Automatically refresh leads data</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={systemSettings.autoRefresh}
                  onChange={(e) => setSystemSettings({ ...systemSettings, autoRefresh: e.target.checked })}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#222126]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#222126]"></div>
              </label>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Refresh Interval (seconds)</label>
              <input
                type="number"
                min="10"
                max="300"
                value={systemSettings.refreshInterval}
                onChange={(e) => setSystemSettings({ ...systemSettings, refreshInterval: parseInt(e.target.value) })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#222126] focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Logout Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Account Actions</h2>
              <p className="text-gray-600">Sign out of your account</p>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSettings;