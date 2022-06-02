import React from "react"

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light py-0 py-lg-2">
        {/* <img className= "logo-image" src={logo} alt="University of Tennessee, Knoxville Logo"/> */}
        <div className="utk-logo container-fluid px-0 px-lg-4">
          {<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48.24 48.24" class="utk-logo utk-logo-square"><title>University of Tennessee Libraries=</title><polygon class="utk-logo--orange" points="47.999 47.999 47.999 0 0 0 0 47.999 47.999 47.999 47.999 47.999"></polygon><path class="utk-logo--white" d="M41.941,6.054V18.165H37.456c0-2.231-2.208-4.037-4.934-4.037a5.088,5.088,0,0,0-4.485,2.355V31.62a5.721,5.721,0,0,0,5.592,5.83h.014v4.486H14.357V37.45h.013a5.721,5.721,0,0,0,5.593-5.83V16.483a5.089,5.089,0,0,0-4.485-2.355c-2.725,0-4.934,1.806-4.934,4.037H6.058V6.054Z"></path></svg>}

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <a 
              className="nav-link libraries-nav-link" 
              href="https://www.lib.utk.edu/"
            >
              Libraries
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)

export default Navbar
