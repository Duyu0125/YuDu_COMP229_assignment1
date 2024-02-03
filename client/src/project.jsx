
import project1 from '../src/assets/project1.png';
import project2 from '../src/assets/project2.jpg';
import project3 from '../src/assets/project3.jpg';
import project4 from '../src/assets/project4.jpg';
import project5 from '../src/assets/project5.jpg';
import project6 from '../src/assets/project6.jpg';
import { Link } from 'react-router-dom';
import '../src/index.css'
import '../src/project.css'

export default function Project() {
     return <>
     
     <section id="works">

          <h3 className="worksTitle">Welcome to my Projects</h3>
          <span className="worksDesc">I always pay attention to the whole blueprint and most of details at the same time.</span> 
          
                  
                  
     </section>

     <section id="project">
         
          <div className="skillBar">
               <img src={project1} alt="project1" className="worksImg" />
               <div className="skillBarText">
               <h2>StopWatch App</h2>
               <p>This app uses to help people stop watching phone.</p>
               </div>

          </div>
          
          <div className="skillBar">
               <img src={project2} alt="project2" className="worksImg" />  

               <div className="skillBarText">
               <h2>Drawing app</h2>
               <p>This app uses to help people who want to draw or have some foundamental </p>
               </div>

          </div>

          <div className="skillBar">
               <img src={project3} alt="AppDesign" className="skillBarImg" />
               <div className="skillBarText">
               <h2>Soul Mate</h2>
               <p>This is a dating app.</p>
               </div>

          </div>
          
                  
     </section>
    

     </>
    }
    