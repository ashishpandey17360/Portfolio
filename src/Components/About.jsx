
import "./About.css"
import aboutimg1 from "../Assets/aboutimg1.jpg"

const About = () => {
  return (
    <div>


      
 <div id="About" className="contAbout">

<div>
    <img className="aboutimg1" src={aboutimg1}/>
</div>
<div className="aboutme ">
<h4  style={{ marginLeft: '8rem' , textAlign:"left" }} className="text-primary ">ABOUT ME</h4>
<h2 style={{ marginLeft: '8rem' , textAlign:"left" }}>Front-end Developer
  <span className="span3 "><br/> based in India. 📍</span></h2>

  <p className="para">Hey, my name is Ashish Pandey, and I'm a Frontend Developer. My passion is to create and develop a clean UI/UX for <br/> my users.

 <br/>My main stack currently is React in combination with Tailwind CSS and javaScript.</p>
</div>

 </div>

    </div>
  )
}

export default About
