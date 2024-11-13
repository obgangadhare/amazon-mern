import React from "react";
import Footer from "./views/Footer/Footer";
import Herosection from "./views/Herosection/Herosection";
import Panel from "./views/Panel/Panel";
import Shopsection from "./views/Shopsection/Shopsection";
import Axiospackage from "./views/axiospackage/axiospackage";




function App() {
  return (
    <div>
   
     <Axiospackage/>
    <Panel/>
    <Herosection/>
   <Shopsection/>
   <Footer/>
    </div>
  );
}

export default App;

