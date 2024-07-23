
import "./Navbar.css"
import logo from "../Assets/logo.svg"
// import { NavLink } from "react-router-dom";
import AnchorLink from 'react-anchor-link-smooth-scroll'


function Navar() {
  return (
    <div className="mediaNav">
       <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary ">
  <div className="container-fluid">
    <a className="navbar-brand nShift " href="#"> <img src={logo}/> </a>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav fw-bold  ms-auto">
      
        <li className="nav-item ">
          <AnchorLink className="nav-link active anchor-link" aria-current="page" href="#Header">Home</AnchorLink>
        </li>
        <li className="nav-item">
          <AnchorLink className="nav-link active anchor-link" aria-current="page" offset={50} href="#About">About me</AnchorLink>
        </li>
        <li className="nav-item">
          <AnchorLink className="nav-link active anchor-link" aria-current="page" offset={50} href="#Project">Projects</AnchorLink>
        </li>
        <li className="nav-item">
          <AnchorLink className="nav-link active anchor-link" aria-current="page" offset={50} href="#Contact">Contact</AnchorLink>
        </li>
       
        
        
      </ul>
      
    </div>
  </div>
</nav>


    </div>
  )
}

export default Navar
