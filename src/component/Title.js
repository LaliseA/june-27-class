import React from 'react'
import  './Title.css'

function Title(props) {
  return (
    <div className="StyledTitle">
      <div> {props.children}</div>
      <h2>Friends List</h2>;
    </div>
  );

}
export default Title
