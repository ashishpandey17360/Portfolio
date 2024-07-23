import "./Contact.css"


function Contact() {
  return (

    
    <div id="Contact" className="contact">
    
      <h5  style={{ marginLeft: '13rem' , textAlign:"left" }} className="text-primary  textAlign">CONTACT</h5>
      <h2 style={{ marginLeft: '13rem' , textAlign:"left" }} className=" fw-bold">Don't be shy! Hit me up! 👇</h2>

      

      <div className="row my-5">
  <div className="col  my-5">
    <span className="ma">
    <i className="fa-solid fa-location-dot fa-3x text-primary"></i>
    </span>
    
    
  </div>
  <div className="col space my-3 ">
    <h3 className="fw-bold  ">Location</h3>
  <p className="fs-5 hov">Moradabad ,India</p>
  </div>

  <div className="col my-5">
    <span className="ma">
    <i className="fa-solid fa-envelope fa-3x text-primary"></i>
    </span>
    
    
  </div>
  <div className="col space my-3 ">
    <h3 className="fw-bold ">Mail</h3>
    <a className="fs-5 text-decoration-none dark cursor-pointer hov" href="mailto:ashishpandeyji17360@gmail.com">ashishpandeyji17360@gmail.com</a>
  </div>


  </div>

 
      
</div>
      
      
    
  )
}

export default Contact
