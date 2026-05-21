export default function UserProfile() {
  return (
    <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant hover:shadow-md transition-shadow duration-300">
      <h3 className="font-label-caps text-[14px] font-bold text-on-surface mb-6">User Profile</h3>
      
      <div className="flex flex-col md:flex-row gap-6 md:items-center">
        {/* Profile Picture */}
        <div className="relative shrink-0">
          <div className="w-20 h-20 rounded-full bg-surface-container-high border-2 border-surface-container-lowest shadow-sm flex items-center justify-center overflow-hidden">
             {/* Fallback avatar if no image */}
             <span className="material-symbols-outlined text-[40px] text-on-surface-variant">person</span>
          </div>
          <button className="absolute bottom-0 right-0 w-7 h-7 bg-primary text-on-primary rounded-full flex items-center justify-center border-2 border-surface-container-lowest hover:scale-105 transition-transform">
            <span className="material-symbols-outlined text-[14px]">edit</span>
          </button>
        </div>

        {/* Form Fields */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-label-caps text-on-surface-variant font-medium">Legal Full Name</label>
            <input 
              type="text" 
              defaultValue="Alexander Sterling"
              className="px-4 py-2.5 bg-surface-container-lowest border border-outline-variant rounded-lg text-body-sm text-on-surface focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all w-full"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-label-caps text-on-surface-variant font-medium">Email Address</label>
            <input 
              type="email" 
              defaultValue="a.sterling@capitalflow.io"
              className="px-4 py-2.5 bg-surface-container-lowest border border-outline-variant rounded-lg text-body-sm text-on-surface focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
