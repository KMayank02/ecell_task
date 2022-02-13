import React from 'react'

function Navbar() {
  return (
    <div>
      <nav className='navbar fixed-top navbar-expand-md navbar-dark bg-dark'>
        <div className="container-fluid">
          <a className="navbar-brand ms-5 me-5" href='#'>Gadget Store</a>
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link ms-4 me-4" href='#'>Home</a>
              </li>
              <li className="nav-item">
              <a className="nav-link ms-4 me-4" href='#'>Services</a>
              </li>
              <li className="nav-item dropdown">
              <div className="nav-link ms-4 me-4 dropdown-toggle" role="button" data-bs-toggle="dropdown">
                  Products
                </div>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Item1</a></li>
                  <li><a className="dropdown-item" href="#">Item2</a></li>
                  <li><a className="dropdown-item" href="#">Item3</a></li>
                <li><a className="dropdown-item" href="#">Item4</a></li>
                <li><a className="dropdown-item" href="#">Item5</a></li>
                </ul>
              </li>
            <li className='nav-item'>
              <form className="form-inline ms-4">
              <input className="form-control" type="search" placeholder="Search..."/>
            </form>
            </li>
            </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link ms-4 me-4" href='#'>Login</a>
            </li>
            <li className="nav-item">
              <a className="nav-link ms-4 me-4" href='#'>Register</a>
            </li>
            </ul>
            
        </div>
        </nav>
    </div>
  )
}

export default Navbar