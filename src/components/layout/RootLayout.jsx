import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 z-0">
        <div className="space-background">
          <div className="stars" />
          <div className="stars-2" />
          <div className="stars-3" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_50%_-150px,rgba(227,24,55,0.7),transparent)]" />
        </div>
      </div>
      <div className="relative z-10">
        <Outlet />
      </div>
    </div>
  )
}

export default RootLayout
