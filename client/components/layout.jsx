import React from 'react';
import { Link } from 'react-router-dom';
import customerLogo from '../src/assets/customerLogo.png';
export default function Layout() {
 return (
 <>
 < img src={customerLogo}alt="customerLogo" className="customerLogo" width="250px" height="200px"/>
 <h1>My Portfolio</h1>
 
 <nav>
    
 <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/server">Service</Link> | <Link to="/project">Project</Link>| <Link to="/contact">Contact</Link>
 </nav>
 <br/>
 <hr />
 
 </>
 
 );
}
