import { Outlet } from "react-router-dom"

function Layout() {
  return (
    <>
      <div className="title">
        <h1>Quiz</h1>
      </div>
      {/* This 'main' div is only for styling (so we can use flexbox) */}
      <div className="main">
        <Outlet />
      </div>
    </>
  )
}

export default Layout