import "./Project.css"
import  textUtiles from "../Assets/textUtiles.png"
import weather from "../Assets/weather.png"
import notes from "../Assets/notes.png"
import ss from "../Assets/ss.png"
import projecttodo from "../Assets/projecttodo.png"

function Project() {
  return (
    <div id="Project" className="projectSection text-start ">
      <h5 className="text-primary">Portfolio</h5>
      <p className="fw-bold ">Each project is a unique peice of development ➕</p>

      <div className="projectshow ">

      <div>
        <img className="projectimg mt-5" src={textUtiles}/>
      </div>

      <div>
        <h4 className="fw-bold" style={{marginLeft:"8rem"}}>TextUtiles</h4>
        <p className="propara mt-3">This project is used to customize words acording to the needs
of the users you can convert words into uppercase and
lowercase, Remove Spaces, Copy Text ,Toggle</p>

<div className="d-flex tech">
    <h5 className="mx-1">React</h5>
    <h5 className="mx-2">Bootstrap</h5>
    
</div>
<button type="button" className="btn btn-outline-info mt-3   " style={{marginLeft:"18rem"}}>
    <a className="removeunderline text-dark" href="https://harrypandey.github.io/text-utiles/" target="_blank"> Live Demo 🔗 </a>
  </button>



      </div>

      

      </div>



{/* second project */}

<div className="projectshow ">


<div>
  <h4 className="fw-bold mt-5" style={{marginRight:"0rem"}}>ToDoApp</h4>
  <p className="propara1 mt-3">Todo React is a user-friendly React application for managing tasks, featuring a sleek interface for adding and deleting tasks. Its component-based architecture ensures smooth functionality and scalability.






</p>

<div className="d-flex tech1">
<h5 className="mx-1">HTML</h5>
<h5 className="mx-1">CSS</h5>
<h5 className="mx-1">JS</h5>
<h5 className="mx-1">API</h5>
<h5 className="mx-1">Bootstrap</h5>

</div>

{/* 
<button type="button"  href="https://ashishpandey17360.github.io/Weather/" target="_blank" style={{marginLeft:"6rem"}} className="btn btn-outline-info mt-3 textdeco text-dark">Live demo 🔗</button> */}

<button type="button" className="btn btn-outline-info mt-3  " style={{marginLeft:"6rem"}}>
    <a className="removeunderline text-dark" href="https://ashishpandey17360.github.io/toDoAppNew/" target="_blank"> Live Demo 🔗 </a>
  </button>


</div>
<div className="project2img">
  <img className="projectimg mt-5" src={projecttodo}/>
</div>



</div>



{/* project 3 */}


<div className="projectshow ">

      <div>
        <img className="projectimg mt-3" src={notes}/>
      </div>

      <div>
        <h4 className="fw-bold" style={{marginLeft:"8rem"}}>Notes</h4>
        <p className="propara mt-3">This minimalist application focuses on providing essential note-taking features in a user-friendly interface, making it accessible for users of all technical backgrounds. </p>

<div className="d-flex tech">
<h5 className="mx-1">HTML</h5>
<h5 className="mx-1">CSS</h5>
<h5 className="mx-1">JS</h5>
    
</div>


<button type="button" className="btn btn-outline-info mt-3  " style={{marginLeft:"18rem"}}>
    <a className="removeunderline text-dark" href="https://ashishpandey17360.github.io/Notes-App/" target="_blank"> Live Demo 🔗 </a>
  </button>

      </div>

      

      </div>
      



      {/*  project 4 */}

      <div className="projectshow ">


<div>
  <h4 className="fw-bold mt-5" style={{marginLeft:"0rem"}}>Wall Clock</h4>
  <p className="propara1 mt-3">The "Wall Clock" project uses HTML, CSS, and JavaScript to display the current time. The design and functionality mimic a traditional wall clock. The clock updates in real-time to show the accurate current time.






</p>

<div className="d-flex tech1">
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
<div className="project2img">
  <img className="projectimg mt-5" src={ss}/>
</div>



</div>




      
    </div>
  )
}

export default Project
