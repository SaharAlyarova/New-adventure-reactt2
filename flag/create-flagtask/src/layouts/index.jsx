import React from 'react';
import "./lheader.scss";
const HeaderCom = () => {
  
  function darkMode({darkMode}){
    let element=document.body;
    element.classList.toggle("dark-mode")
}
  return (
    <div className='header'>
    <div> <h1>Where in the world?</h1></div> 
    <div className='iconbtn'>
    <div><i class="fa-regular fa-moon"></i></div>
    <div><button onClick={darkMode}>Dark mode</button></div>  
    </div>

    </div>
  )
}

export default HeaderCom
