export default function DeveloperCMS() {
  return (
    <div className="p-8">
      <h1 className="font-display text-3xl text-white">Developer CMS</h1>
      <p className="text-text-secondary mt-2">Master control panel for the entire platform.</p>
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="glass p-6 rounded-2xl text-center">
          <div className="text-3xl mb-2">📝</div>
          <p className="text-text-secondary text-sm">Content</p>
        </div>
        <div className="glass p-6 rounded-2xl text-center">
          <div className="text-3xl mb-2">🎨</div>
          <p className="text-text-secondary text-sm">Theme</p>
        </div>
        <div className="glass p-6 rounded-2xl text-center">
          <div className="text-3xl mb-2">✂️</div>
          <p className="text-text-secondary text-sm">Services</p>
        </div>
        <div className="glass p-6 rounded-2xl text-center">
          <div className="text-3xl mb-2">👤</div>
          <p className="text-text-secondary text-sm">Barbers</p>
        </div>
      </div>
    </div>
  )
}