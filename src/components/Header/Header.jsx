import React from 'react'
import react from "../../assets/react.svg";
import "./Header.scss";


const Header = () => {
  return (
    <header>
    <div className="react-img">
      <img src={react} alt="reactImg" />
    </div>
  </header>
  )
}

export default Header