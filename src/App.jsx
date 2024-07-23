
import './App.css'
import Navbar from "./Components/Navar.jsx"
import Header from "./Components/Header.jsx";
import About from "./Components/About.jsx";
import Project from "./Components/Project.jsx";
import Contact from "./Components/Contact.jsx";
import Footer from "./Components/Footer.jsx";


import {Routes,Route, BrowserRouter} from "react-router-dom";
import Home from './Components/Home.jsx';
import ScrollToTop from './Components/scrollToTop.jsx';






function App() {
  return (
   <div>
     {/* <Navbar/>
     <Header/>
     <About/>
     <Project/>
     <Contact/>
     <Footer/> */}


     <BrowserRouter>
     <ScrollToTop/>
<Navbar/>
   
  <Routes>
  



    <Route path='/' element={<Home/>}/>
    <Route path="/header" element={<Header />} />
    <Route path="/about" element={<About />} />
    <Route path="/project" element={<Project />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/footer" element={<Footer />} />


    
  </Routes>
</BrowserRouter>
     
   </div>
  
  );
}

export default App;
