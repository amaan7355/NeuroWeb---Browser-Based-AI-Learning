import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import UseAppContext from '../../Context/AppContext';

const Navbar = () => {
  const { loggedIn, logout, avatar } = UseAppContext();

  const displayUserOption = () => {
    if (loggedIn) {
      return (
        <>
          <li className='nav-item'><button className='btn btn-outline-primary m-2' onClick={logout}>Logout</button></li>
          {/* <li>
            <img height={50} className='rounded-circle' src={"https://esportsarena.onrender.com/" + avatar} alt="avatar" />
          </li> */}
        </>
      )
    }
    else {
      return (
        <>
          <li className="nav-item">
            <NavLink className="nav-link" to="/main/signup">
              <button className='btn btn-outline-primary'>Sign up</button>
            </NavLink>
          </li>
        </>
      )
    }
  }
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
              <li className="nav-item">
                <NavLink className="nav-link me-3" to="/main/contactus">
                  <font className='fw-bold fs-5'>Contact Us</font>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link me-3" to="/admin/dashboard">
                  <font className='fw-bold fs-5'>Dashboard</font>
                </NavLink>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              {displayUserOption()}
            </ul>
          </div>
        </div>
      </nav>

    </div>
  )
}

export default Navbar