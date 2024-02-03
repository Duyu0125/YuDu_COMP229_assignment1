

import { Link } from 'react-router-dom';


export default function Home() {
     return <>
     
     <div className="home-container">
       <h2>Welcome to My Career Garden</h2>
       <p>Discover the pathways of my professional journey and the projects that I've cultivated along the way.</p>
    
       

   
       <div className="home-buttons">
          <div><Link to="/about" className="button">About Me</Link></div>
          <div><Link to="/projects" className="button">Projects</Link></div>
          <div><Link to="/server" className="button">Services</Link></div>
          <div><Link to="/contact" className="button">Contact Me</Link></div>
       </div>

   </div>





    

     </>
}
    