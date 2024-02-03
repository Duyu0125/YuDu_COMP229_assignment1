import Phoebe from '../src/assets/Phoebe.png';
import ux from '../src/assets/ux.png';
import web from '../src/assets/web.png';
import app from '../src/assets/app.png';
import hire from '../src/assets/hire.jpg';
import resume from '../public/ResumeExample.pdf';
import { Link } from 'react-router-dom';
import '../src/index.css'
import '../src/about.css'





export default function About() {
     return <>

     <section id="intro">
          <div className="introContent">
          <span className="hello">Hello,</span><br/>
          <span className="introText">I am <span className="introName">Yu Du</span> 
          <img src={Phoebe} alt="profile" className="bbg" width="300" height="270" align="right" />
          <br/>Website Designer</span>
          <p className="introPara">I am a skilled web designer with experience in creating visually appealing user friendly websites.</p>

     
          



          <a href={resume}><button className="btn"><img src={hire} alt="Hire me" width="100px" height="100px"/></button></a>
          
          </div>
          
     </section>
     
     <section id="skill">
         
          <div className="skillBar">
               <img src={ux} alt="UIDesign" className="skillBarImg" />
               <div className="skillBarText">
               <h2>UI/UX Design</h2>
               <p>This is a demo text, you can write your own content here.</p>
               </div>

          </div>
          
          <div className="skillBar">
               <img src={web} alt="WebDesign" className="skillBarImg" />
               <div className="skillBarText">
               <h2>Web Design</h2>
               <p>This text can be changed while making production ready website.</p>
               </div>

          </div>

          <div className="skillBar">
               <img src={app} alt="AppDesign" className="skillBarImg" />
               <div className="skillBarText">
               <h2>App Design</h2>
               <p>You can write text related to mobile app development.</p>
               </div>

          </div>
          
                  
     </section>
    

     </>
    }
    