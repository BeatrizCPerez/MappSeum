import React from 'react'
import "./NavFooter.css"
import { Outlet } from 'react-router-dom'

const NavFooter = () => {
  return (
    <>
    <nav className="menu">
      <a href="/"><img src="src\assets\mappseum-logo.png"/></a>
      <button>Agregar escultura</button>
    </nav>
    <Outlet/>
    <footer>
      <p>© 2024 MappSeum</p>
      <div>
        <a href='https://www.facebook.com/' target='blank'><img src="src\assets\logos-redes\Facebook.png"/></a>
        <a href="https://www.instagram.com/" target='blank'><img src="src\assets\logos-redes\Instagram.png"/></a>
        <a href="https://github.com/BeatrizCPerez/MappSeum" target='blank'><img src="src\assets\logos-redes\GitHub.png"/></a>
      </div>
    </footer>
   </>    
  )    
 

}

export default NavFooter