import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold fs-2" href="#">
            <img src="/main_logo.png" alt="" className='' height={"60rem"} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link me-3" to="/main/home">
                  <font className='fw-bold fs-5'>Home</font>
                </NavLink>
              </li>
              <li className="nav-item">
              <NavLink className="nav-link me-3" to="/main/aboutus">
                  <font className='fw-bold fs-5'>About</font>
                </NavLink>
              </li>
            </ul>
            {/* <form className="d-flex" role="search"> */}
            <Link to='/admin/dashboard'><button className="btn btn-outline button-search me-3">
                Dashboard
              </button></Link>
              <Link to='/main/signup'><button className="btn btn-outline button-search">
                signin
              </button></Link>
            {/* </form> */}
          </div>
        </div>
      </nav>

    </div>
  )
}

export default Navbar