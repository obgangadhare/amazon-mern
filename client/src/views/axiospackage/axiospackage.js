import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../navbar/Navbar";


import './Card.css';
import './elect.css';

const Axiospackage = () => {
    const [shirts, setShirts] = useState([]);
    const [electronics, setElectronics] = useState([]);
    const [mobiles, setMobiles] = useState([]);
    const [filteredShirts, setFilteredShirts] = useState([]);
    const [filteredElectronics, setFilteredElectronics] = useState([]);
    const [filteredMobiles, setFilteredMobiles] = useState([]);
    const [inputType, setInputType] = useState("");

  
    useEffect(() => {
        axios.get('http://localhost:5400') 
            .then((res) => {
                setShirts(res.data.shirts); 
                setElectronics(res.data.bestsellers);
                setMobiles(res.data.mobiles)
            })
            .catch(err => console.error("Error fetching data:", err));
    }, []);

    const handleInputChange = (event) => {
        setInputType(event.target.value);
    };

    const handleSearch = () => {
        const typeToSearch = inputType.trim().toLowerCase();

        if (typeToSearch === "shirts") {
            setFilteredShirts(shirts); 
            setFilteredElectronics([]); 
            setFilteredMobiles([]); 
        } else if (typeToSearch === "electronics") {
            setFilteredElectronics(electronics); 
            setFilteredShirts([]); 
            setFilteredMobiles([]); 
        } else if (typeToSearch === "mobiles") {
            setFilteredMobiles(mobiles); 
            setFilteredShirts([]);
            setFilteredElectronics([]); 
        }
        else {
      
            setFilteredShirts(shirts.filter(shirt => shirt.type.toLowerCase() === typeToSearch));
            setFilteredElectronics(electronics.filter(elect => elect.type.toLowerCase() === typeToSearch));
            setFilteredMobiles(mobiles.filter(mob => mob.type.toLowerCase() === typeToSearch));
        }
    };

    return (
        <div>
            <Navbar 
                inputType={inputType} 
                onInputChange={handleInputChange} 
                onSearch={handleSearch} 
            />
       
            {/* Display Shirts */}
            <div className="shirt-container">
                {filteredShirts.length > 0 ? (
                    filteredShirts.map(shirt => (
                        <div className="card" key={shirt.id}>
                            <img src={shirt.img} alt={shirt.heading} />
                            <div className="head12" >{shirt.heading}</div>
                            <div className="description">{shirt.description}</div>
                            <div className="price1234"><span className='pricep'>Rs</span>{shirt.price}<span className='pricep1'>M.R.P: Rs.2099</span></div>
                            
                            <div className="button-container">
                                <button>Add to Cart</button>
                            </div>
                        </div>
                    ))
                ) : (
                    inputType.trim().toLowerCase()==="shirts" &&  <p>No shirts found</p> 
                )}
            </div>

            {/* Display Electronics */}
            <div className="electronics-container">
                {filteredElectronics.length > 0 ? (
                    filteredElectronics.map(elect => (
                        <div key={elect.id}>
                        <div className="cardboxz">
                       
                            <div className="cardboximgz">
                                <img className="imgsizez" src={elect.img} alt={elect.heading} />
                            </div>
                         
                            <div className="cardboxdescriptz">{elect.description}</div>
                            <div className="pricez">Rs.{elect.price}</div>
                            <div >
                                <button className="button-container">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                    ))
                ) : (
                   inputType.trim().toLowerCase()==="electronics" &&  <p> No electronics found</p>
                )}
            </div>
           
           {/* Display mobiles */}
           <div className="mobiles-container">
                {filteredMobiles.length > 0 ? (
                    filteredMobiles.map(mob => (
                        <div key={mob.id}>
                        <div className="cardboxz">
                       
                            <div className="cardboximgz">
                                <img className="imgsizez" src={mob.img} alt={mob.type} />
                            </div>
                         
                            <div className="cardboxdescriptz">{mob.description}</div>
                            <div className="pricez">Rs.{mob.price}</div>
                            <div >
                                <button className="button-container">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                    ))
                ) : (
                   inputType.trim().toLowerCase()==="mobiles" &&  <p> No mobiles found</p>
                )}
            </div>
        </div>
    );
};

export default Axiospackage;
