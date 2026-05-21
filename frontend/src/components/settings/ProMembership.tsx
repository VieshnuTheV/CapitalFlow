export default function ProMembership() {
  return (
    <div className="bg-primary-container rounded-xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-300">
      <div>
        <h3 className="font-label-caps text-label-caps text-on-primary-container uppercase tracking-wider mb-3">Pro Membership</h3>
        <p className="text-body-sm text-on-primary font-medium leading-relaxed mb-6">
          You are currently on the <br />
          Enterprise precision tier.
        </p>
      </div>
      
      <button className="w-full bg-surface-container-lowest text-on-surface py-2.5 rounded-lg text-body-sm font-bold hover:bg-surface-container-low transition-colors active:scale-[0.98]">
        Upgrade Tier
      </button>
    </div>
  );
}
