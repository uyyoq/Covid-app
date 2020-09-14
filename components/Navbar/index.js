import React from 'react'
import Link from 'next/link'
import styled from "styled-components";
import Title from '../Title/title';
import { connect } from "react-redux"

const Container = styled.div`
 display: flex;
 width: 100%;
 margin: 0 auto;
 margin-bottom: 40px;
background: ${props => props.isDark ? "white" : "black"};
`

const Menu = styled.div`
 display: flex;
 flex-direction: column;
 width: 100%;
 align-items:center;
 justify-content: center;
 margin: 0 auto;   
`

const List = styled.a`
 font-size: 18px;
 font-weight: bold;
 cursor: pointer;
 color: ${props => props.isDark ? "black" : "white"};

 &:hover{
   font-weight: bold;
 }
`

function Navbar(props) {
  return (
    <Container isDark={props.showInfo}  >
      <Menu>
        <Link href="/indonesia">
          <List isDark={props.showInfo} >Indonesia</List>
        </Link>
      </Menu>
      {/* <Title /> */}
      <Menu>
        <Link href="/login">
          <List isDark={props.showInfo} >Login</List>
        </Link>
      </Menu>
      <Menu>
        <Link href="/global">
          <List isDark={props.showInfo} >Global</List>
        </Link>
      </Menu>
      
    </Container>
  )
}

const mapStateToProps = (state) => {
  return {
    showInfo: state.navbarReducer.showInfo
  }
}

const mapDispatchToProps = {}



// export default Navbar;
export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
