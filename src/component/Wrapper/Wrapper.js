import React from "react";
import "./Wrapper.css";

function Wrapper(props) {
  return ( 
  <div className="Wrapper"> 
      <div>{props.children}</div>
  </div>
  );
}
      
export default Wrapper;
 