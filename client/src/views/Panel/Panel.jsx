import React,{Component} from "react";

import {Link} from 'react-router-dom';



import './Panel.css';
class Panel extends Component{ // React.Component
    render(){
        return(
           <div>
       <div className="panel">
          <div className="panelbig panelname border1">
            
                <Link className="panelname" to="/"><div className="panel-all">
                <i className="fa-solid fa-bars"></i>All</div></Link> 
            
            </div>  
        
               <Link className="panelname" ><div className="today1 border1"><p >Today's Deals</p></div></Link>  
               <Link className="panelname" ><div className="today1 border1"><p >Best Sellers</p></div></Link>  
               <Link className="panelname" ><div className="today1 border1"><p >Fashion</p></div></Link>  
               <Link className="panelname" ><div className="today1 border1"><p >Mobiles</p></div></Link>  
               <Link className="panelname" ><div className="today1 border1"><p >Electronics</p></div></Link>  
           
               
           
          
        </div>
           </div> 
        );
    }
};

export default Panel;