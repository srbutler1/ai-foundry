import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div className="min-h-screen relative">
      <div className="star-background" />
      <div className="red-glow" />
      <div className="relative z-10">
        <Outlet />
      </div>
    </div>
  )
}

export default RootLayout
