import React from 'react'

function HeaderLogo() {
  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-10">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        {/* Replace 'src' with your logo's path or import */}
        <img src="/path-to-your-logo.svg" alt="Logo" className="h-8" />
        <h1 className="text-xl font-semibold">Migioricontideposito.it</h1>
      </nav>
    </header>
  )
}

export default HeaderLogo