import React from 'react';
import { Settings, User, Bell, Shield } from 'lucide-react';

const AdminSettings: React.FC = () => {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600">Manage your admin preferences and configuration</p>
      </div>

      {/* Settings Sections */}
      <div className="space-y-6">
        {/* Account Settings */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center mb-4">
            <User className="h-5 w-5 text-gray-400 mr-2" />
            <h2 className="text-lg font-semibold text-gray-900">Account Settings</h2>
          </div>
          <p className="text-gray-600 mb-4">Manage your account information and preferences.</p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600">Account settings will be available in a future update.</p>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center mb-4">
            <Bell className="h-5 w-5 text-gray-400 mr-2" />
            <h2 className="text-lg font-semibold text-gray-900">Notifications</h2>
          </div>
          <p className="text-gray-600 mb-4">Configure how you receive notifications about new leads.</p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600">Notification settings will be available in a future update.</p>
          </div>
        </div>

        {/* Security */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center mb-4">
            <Shield className="h-5 w-5 text-gray-400 mr-2" />
            <h2 className="text-lg font-semibold text-gray-900">Security</h2>
          </div>
          <p className="text-gray-600 mb-4">Manage your password and security preferences.</p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600">Security settings will be available in a future update.</p>
          </div>
        </div>

        {/* System Settings */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center mb-4">
            <Settings className="h-5 w-5 text-gray-400 mr-2" />
            <h2 className="text-lg font-semibold text-gray-900">System Settings</h2>
          </div>
          <p className="text-gray-600 mb-4">Configure system-wide settings and preferences.</p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600">System settings will be available in a future update.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSettings;