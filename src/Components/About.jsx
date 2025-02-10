
import "./About.css"
import about from "../Assets/about.webp"

const About = () => {
  return (
    <div>


      
 <div id="About" className="contAbout">

<div className="">
    <img className="aboutimg1" src={about}/>
</div>
<div className="aboutme">
<h4   className=" aboutH4 colorHeading corinthia-text fs-3">ABOUT    ME</h4>


  <p className="para  lato-text my-5 fs-5">Hey, my name is Ashish Pandey, and I'm a Full Stack Developer. My passion is to create and develop a clean UI/UX for my users.

 <br/>My main stack currently is React in combination with the MERN stack (MongoDB, Express.js, React, and Node.js).</p>
</div>

 </div>

    </div>
  )
}

export default About
