
import "./Header.css"
import ashish from "../Assets/ashish.png"
import linkdin from "../Assets/linkdin.png"
import github from "../Assets/github.png"
import html from "../Assets/html.png"
import css from "../Assets/css.png"
import js from "../Assets/js.png"
import tailwind from "../Assets/tailwind.png"
import nodejs from "../Assets/nodejs.png"
import react from "../Assets/react.png"
import mongodb from "../Assets/mongodb.png"
import bootstrap from "../Assets/bootstrap.png"
import mysql from "../Assets/mysql.png"
import express from "../Assets/express.png"

function Header() {
  return (
    <div id="Header" className="container my-5">
  <div className="row medrow">
    <div className="col-12 col-md-9 cen  mediacen">
    <h1 className="h1">
    <span className="front-end">Front-End React</span><br /> 
    <span className="span1 ms middle">
      Developer👋
      </span> 
      </h1>

      <p className="mar">
      Hi,  I'm  Ashish Pandey. A passionate Front-end React <br /> <span className="span2">
       Developer based in India. <span className="siftIcon">📍</span>
      </span> 
      </p>

      <div className="cont">
      <a className="ashift" target="_blank" href="https://www.linkedin.com/in/ashish-pandey-17ap360ap1976/">
        <img className="lgimg " src={linkdin}/>
        
      </a>
      <a className="ashift" target="_blank" href="https://github.com/ashishpandey17360">
        
      <img className="lgimg " src={github}/>
      </a>

      </div>

      
    </div>
    <div className="col-6 col-md-3 respro">
     <img className="pro-img profile-image" src={ashish}/>
    </div>
    
  </div>




<div className="skills mt-5">
<h5 className="mt-3 phoneMar ">Tech Stack  |</h5>

<div className="first3">
  <img className="skillsimg translate-effect" src={html}/>
  <img className="skillsimg translate-effect" src={css}/>
  <img className="skillsimg translate-effect" src={js}/>
  <img className="skillsimg translate-effect" src={tailwind}/>
  <img className="skillsimg translate-effect" src={react}/>
</div>
<div className="second3">
  <img className="skillsimg translate-effect" src={bootstrap}/>
  <img className="skillsimg translate-effect" src={nodejs}/>
  <img className="skillsimg translate-effect" src={express}/>
  <img className="skillsimg translate-effect" src={mongodb}/>
  {/* <img className="skillsimg translate-effect" src={mysql}/> */}
  
</div>
</div>

</div>
  )
}

export default Header
