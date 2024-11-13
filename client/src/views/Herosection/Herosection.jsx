import React,{Component} from "react";
import b from './images/b.jpg';
import c from './images/c.jpg';
import d from './images/d.jpg';
import './Herosection.css';
class Herosection extends Component{ // React.Component
    render(){
        return(
            <div>
            <div id="carouselExampleCaptions" className="carousel slide"  data-bs-ride="carousel">
       
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="2000">
                <img src={d} className="d-block w-100" alt="..."/>
              
              </div>
              <div className="carousel-item"data-bs-interval="2000">
                <img src={b} className="d-block w-100" alt="..."/>
               
              </div>
              <div className="carousel-item"data-bs-interval="2000">
                <img src={c} className="d-block w-100" alt="..."/>
               
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          </div>
            
        );
    }
};

export default Herosection;