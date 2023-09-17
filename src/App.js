import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import React from 'react'

export default function App() {
  return (
    <>
   <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/"><img src="https://th.bing.com/th/id/OIP.4Kf9tAF_ZPhRmUvivvnr0AHaHa?pid=ImgDet&rs=1" alt=""></img></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Skills</a>
        </li>

      <li className="nav-item">
          <a className="nav-link" href="/">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Projects</a>
        </li>
        </ul>
        <ul className="nav-buts d-flex ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <button><a className="nav-link" href="/">Login</a></button>
        </li>
        <li className="nav-item">
          <button><a className="nav-link" href="/">SignUp</a></button>
        </li>
        </ul>
    </div>
  </div>
</nav>
<div className="container">
  <div className='content'>
  <div className='image'>
    <img src='https://www.dlf.pt/png/big/0/8993_man-cartoon-png.jpg' alt=''></img>
  </div>
  <div className='grid'>
    <h1>Hi There</h1>
    <h2>I'm Farhan Khan</h2>
    <h3>Frontend Web Developer</h3>
    <button>Hire Me</button>
    <div className='icons'>
    <a href='/' className='font-1'><FontAwesomeIcon icon={faLinkedin}/></a>
    <a href='/' className='font-2'><FontAwesomeIcon icon={faFacebook}/></a>
    <a href='/' className='font-3'><FontAwesomeIcon icon={faInstagram}/></a>
    <a href='/' className='font-4'><FontAwesomeIcon icon={faGithub}/></a>
  </div>
  </div>
  </div>
</div>
    </div>
    </>
  )
}

