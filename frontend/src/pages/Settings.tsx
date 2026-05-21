import SystemStatus from '../components/settings/SystemStatus';
import ProMembership from '../components/settings/ProMembership';
import UserProfile from '../components/settings/UserProfile';
import IntegrationsCard from '../components/settings/IntegrationsCard';

export default function Settings() {
  return (
    <div className="flex flex-col gap-6 max-w-5xl mx-auto w-full pb-8">
      {/* Page Header matching the screenshot */}
      <div className="mb-2">
        <h1 className="font-inter font-bold text-[32px] text-primary tracking-tight mb-2">Settings</h1>
        <p className="text-body-md text-on-surface-variant">
          Manage your professional profile and global financial configurations.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <SystemStatus />
          <ProMembership />
        </div>

        {/* Right Column */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          <UserProfile />
          <IntegrationsCard />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-4 mt-6">
        <button className="px-6 py-2.5 border border-outline-variant rounded-lg text-body-sm font-bold text-on-surface hover:bg-surface-container-low transition-colors active:scale-95">
          Discard Changes
        </button>
        <button className="px-6 py-2.5 bg-primary text-on-primary rounded-lg text-body-sm font-bold hover:opacity-90 transition-opacity active:scale-95">
          Save Changes
        </button>
      </div>
    </div>
  );
}
