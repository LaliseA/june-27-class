import "./App.css";
import Wrapper from "./component/Wrapper/Wrapper";
import Title from "./component/Title";
import FriendCard from "./component/FriendCard";
import React from "react";


import {images} from './images'

function App() {
  console.log('images', images)
  return (  
     <div className="container"> 
        <div className="second_Wrapper"></div>
     <Title />
         <Wrapper>
          <FriendCard
          image={imageOne}
          name='John' 
          occupation='Front-End Engineer' 
          location='DC'
          />
          <FriendCard
          image={imageTwo}
           name='Evan' 
           occupation='Back-End Engineer' 
           location='VA'
            />
          <FriendCard
           image={imageThree}
           name='Donell' 
           occupation='Front-End Architect' 
           location='MN'
           />
        </Wrapper>
      </div>
  );
}
export default App;
