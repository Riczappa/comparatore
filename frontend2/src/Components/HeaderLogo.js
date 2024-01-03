import React from 'react'
import Logo from "../images/Logo_1line.svg"

function HeaderLogo() {
  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-10">
      <nav className="container mx-auto p-1 flex space-x-2  items-center">
        {/* Replace 'src' with your logo's path or import */}
        <img src={Logo} alt="Logo" className="h-10" />
        <h1 className="text-xl font-semibold ">  <span style={{ color: 'blue' }}></span>
          </h1>
      </nav>
    </header>
  )
}

export default HeaderLogo