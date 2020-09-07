import React, { useEffect } from 'react'
import {useSelector} from "react-redux"
import Navbar from '../components/Navbar';
import Fab from '../components/Fab/fab';
import Info from "./info"
import styled from "styled-components";
import { API_COVID_INDO } from '../constant/API_URL';
import { connect } from "react-redux"

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 0 auto;
width: 100%;
`
const Wrapper = styled.div`
  width: 55%;
  text-align: center;
  padding: 10px;
  border: 1px solid black;
`;
const Title = styled.p`
  font-size: 15px;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
`;
const Source = styled.p`
  font-size: 13px;
  font-family: Arial, Helvetica, sans-serif;
  font-style: italic;
  margin-top: -10px;
`;

const Link = styled.a`
  color: black;
  text-decoration: none;
`;

const Indonesia = ({data }) => {
  // const [showInfo, setShowInfo] = useState(true);
  // const [isNotif, setNotif] = useState(true);
  const showInfo = useSelector(state => state.showInfo)

  useEffect(() => {
    console.log("data covid indo", data.articles)
  }, [])

  // const handleShowInfo = () => {
  //   setShowInfo(!showInfo)
  //   setNotif(!isNotif)
  // }

  return (
    <Container>
      <Navbar />
      <h1>Covid News - Indonesia</h1>

      {
        showInfo ? (
          data.articles.map(data => (
            <Wrapper>
              <Link href={data.url} target="_blank">
                <Title>{data.title}</Title>
                <Source>{data.source.name}</Source>
              </Link>
            </Wrapper>
          ))
        ) : ( <Info />) 
      }
      
     <Fab />
    </Container>
  )
}

export const getServerSideProps = async () => {
  try {
    const res = await fetch(`${API_COVID_INDO}`)
    const data = await res.json()
    return {
      props:
        { data }
    }
  } catch (error) {
    return {
      props: {}
    }
  }
}


const mapStateToProps = (state) => {
  return {
    showInfo: state.navbarReducer.showInfo
  }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Indonesia);

