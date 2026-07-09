export default function OwnerDashboard() {
  return (
    <div className="p-8">
      <h1 className="font-display text-3xl text-white">Owner Dashboard</h1>
      <p className="text-text-secondary mt-2">Welcome to your luxury barbershop management dashboard.</p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass p-6 rounded-2xl">
          <p className="text-text-secondary text-sm">Today's Bookings</p>
          <p className="text-4xl font-display text-white mt-2">0</p>
        </div>
        <div className="glass p-6 rounded-2xl">
          <p className="text-text-secondary text-sm">This Week</p>
          <p className="text-4xl font-display text-white mt-2">0</p>
        </div>
        <div className="glass p-6 rounded-2xl">
          <p className="text-text-secondary text-sm">This Month</p>
          <p className="text-4xl font-display text-white mt-2">0</p>
        </div>
      </div>
    </div>
  )
}