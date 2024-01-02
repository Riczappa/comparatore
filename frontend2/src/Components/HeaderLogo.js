import React from 'react'
import Logo from "../images/oak2.png"

function HeaderLogo() {
  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-10">
      <nav className="container mx-auto p-2 flex space-x-2  items-center">
        {/* Replace 'src' with your logo's path or import */}
        <img src={Logo} alt="Logo" className="h-8" />
        <h1 className="text-xl font-semibold">  <span style={{ color: 'blue' }}>migliori</span>
          contideposito.it</h1>
      </nav>
    </header>
  )
}

export default HeaderLogo