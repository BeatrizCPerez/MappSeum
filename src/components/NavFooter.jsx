import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import styled from 'styled-components'

const Navbar = styled.nav`
  background-color: #B19470;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Montserrat';
  box-sizing: border-box;
  padding: 0 15px;
  height: 100px;  

  @media screen and (max-width: 767px) {
    height: 70px;
    padding: 0 10px;
  }
`
const MapseumLogo = styled.img`
  height: 60px; 

  @media screen and (max-width: 767px) {
    height: 45px;
  } 
`
const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
  min-height: 70vh;
  @media screen and (max-width: 767px) {
    min-height: 80vh;
  }
  `
const Footer = styled.footer`
  background-color: #B19470;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Montserrat';
  box-sizing: border-box;
  padding: 0 15px;
  height: 50px;

  @media screen and (max-width: 767px) {
    height: 35px;
    font-size: 12px;
    padding: 0 10px;
  }
`
const SocialMediaLogo = styled.img`
  height: 30px;
  margin-top: 5px;

  @media screen and (max-width: 767px) {
    height: 25px;
    margin-top: 5px;
  } 
`

const NavFooter = () => {
  return (
    <>
      <Navbar>
        <Link to="/"><MapseumLogo src="src/assets/mappseum-logo.png" alt="logoMappseum" /></Link>
      </Navbar>

      <Main>
        <Outlet />      
      </Main>

      <Footer >
        <p>© 2024 MappSeum</p>
        <div style={{ display: "flex", gap: "15px"}}>
          <a href='https://www.facebook.com/' target='blank'><SocialMediaLogo src="src\assets\footer-logos\Facebook.png" /></a>
          <a href="https://www.instagram.com/" target='blank'><SocialMediaLogo src="src\assets\footer-logos\Instagram.png" /></a>
          <a href="https://github.com/BeatrizCPerez/MappSeum" target='blank'><SocialMediaLogo src="src\assets\footer-logos\GitHub.png" /></a>
        </div>
      </Footer>
    </>
  )
}

export default NavFooter