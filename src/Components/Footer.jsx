// import linkdin from "../Assets/linkdin.png"
// import github from "../Assets/github.png"
import "./Footer.css"

function Footer() {
  return (
    <div className="footer-container bg-dark ">
      <div className="bg-dark footerflex mediafooter  setmediafooter  h">
        <h4 className="fw-bold text-light">Copyright © 2024. All rights are reserved</h4>


        <div className="bg-dark footerlogo left ">
      <a className="ashift text-light" target="_blank" href="https://www.linkedin.com/in/ashish-pandey-17ap360ap1976/">
      <i className="fa-brands fa-linkedin fa-3x"></i>
        
      </a>
      <a className="ashift mx-5 text-light" target="_blank" href="https://github.com/ashishpandey17360">
        
      <i className="fa-brands fa-github fa-3x"></i>
      </a>
      </div>
      </div>
      
    </div>
  )
}

export default Footer
