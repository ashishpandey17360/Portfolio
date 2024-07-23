import "./Project.css"
import  textUtiles from "../Assets/textUtiles.png"

import notes from "../Assets/notes.png"
import ss from "../Assets/ss.png"
import projecttodo from "../Assets/projecttodo.png"

function Project() {
  return (
    <div id="Project" className="projectSection text-start  cen">
      <h5 className="text-primary cen">Portfolio</h5>
      <p className="fw-bold ali ">Each project is a unique peice of development ➕</p>

      <div className="projectshow ">

      <div className="order2">
        <img className="projectimg mt-5" src={textUtiles}/>
      </div>

      <div className="fix">
      <div className="order1">
          <h4 className="fw-bold tU">TextUtiles</h4>
      </div>
       
<div className="order3">
           <p className="propara proparamediatextUtiles mt-3 ">This project allows users to customize text according to their needs. It provides features to convert text to uppercase or lowercase, remove spaces, copy text, and toggle various text transformations.</p>
          
        
  <div className="d-flex tech techmediatextUtiles">
      <h5 className="mx-1">React</h5>
      <h5 className="mx-2">Bootstrap</h5>
      
  </div>
  <button type="button" className="btn btn-outline-info mt-3 size   ">
      <a className="removeunderline text-dark" href="https://harrypandey.github.io/text-utiles/" target="_blank"> Live Demo 🔗 </a>
    </button>
</div>



      </div>

      

      </div>



{/* second project */}

<div className="projectshow ">


<div className="order22">
  <h4 className="fw-bold mt-5  tU1 ">ToDoApp</h4>
  <p className="propara1  mt-3">Todo React is a user-friendly React application for managing tasks, featuring a sleek interface for adding and deleting tasks. Its component-based architecture ensures smooth functionality and scalability.






</p>

<div className="d-flex techmediatodoapp">
<h5 className="mx-1">React</h5>
<h5 className="mx-1">Bootstrap</h5>

</div>

{/* 
<button type="button"  href="https://ashishpandey17360.github.io/Weather/" target="_blank" style={{marginLeft:"6rem"}} className="btn btn-outline-info mt-3 textdeco text-dark">Live demo 🔗</button> */}

<button type="button" className="btn btn-outline-info mt-3 size1  " >
    <a className="removeunderline text-dark" href="https://ashishpandey17360.github.io/toDoAppNew/" target="_blank"> Live Demo 🔗 </a>
  </button>


</div>
<div className="project2img order21">
  <img className="projectimg mt-5" src={projecttodo}/>
</div>



</div>



{/* project 3 */}


<div className="projectshow ">

      <div>
        <img className="projectimg mt-3" src={notes}/>
      </div>

      <div >
        <h4 className="fw-bold notesh4" >Notes</h4>
        <p className="propara proparamedianotes mt-3">This minimalist application focuses on providing essential note-taking features in a user-friendly interface, making it accessible for users of all technical backgrounds. </p>

<div className="d-flex tech techmedianotes">
<h5 className="mx-1">HTML</h5>
<h5 className="mx-1">CSS</h5>
<h5 className="mx-1">JS</h5>
    
</div>


<button type="button" className="btn btn-outline-info mt-3  size">
    <a className="removeunderline text-dark" href="https://ashishpandey17360.github.io/Notes-App/" target="_blank"> Live Demo 🔗 </a>
  </button>

      </div>

      

      </div>
      



      {/*  project 4 */}

      <div className="projectshow ">


<div className="order45">
  <h4 className="fw-bold mt-5 mediah4clock">Wall Clock</h4>
  <p className="propara1 mt-3">The "Wall Clock" project uses HTML, CSS, and JavaScript to display the current time. The design and functionality mimic a traditional wall clock. The clock updates in real-time to show the accurate current time.






</p>

<div className="d-flex tech1 techmediaclock">
<h5 className="mx-1">HTML</h5>
<h5 className="mx-1">CSS</h5>
<h5 className="mx-1">JS</h5>


</div>

{/* 
<button type="button"  href="https://ashishpandey17360.github.io/Weather/" target="_blank" style={{marginLeft:"6rem"}} className="btn btn-outline-info mt-3 textdeco text-dark">Live demo 🔗</button> */}

<button type="button" className="btn btn-outline-info mt-3  " style={{marginLeft:"6rem"}}>
    <a className="removeunderline text-dark" href="https://ashishpandey17360.github.io/wall-clock/
" target="_blank"> Live Demo 🔗 </a>
  </button>


</div>
<div className="project2img order44">
  <img className="projectimg mt-5" src={ss}/>
</div>



</div>




      
    </div>
  )
}

export default Project
