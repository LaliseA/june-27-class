import React from 'react';
import imageOne from "../images/image_one.jpg";
// import imageTwo from "../images/image_two.jpg";
// import imageThree from "../images/image_three.jpg";

function FriendCard({name,occupation,location}) {
  return ( 
  <diV style={StyledFriendCard}>
    <img src={imageOne} alt='one' />
    <div className='friend-description'>
    <ul>
       <li>Name:{name}</li> 
       <li>Occupation:{occupation}</li> 
       <li>Location:{location}</li>    
      </ul>
    </div>
  </diV>
    );
}

const StyledFriendCard={
  backgroundColor: "#fff",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0, 0.25)",
};

export default FriendCard;
