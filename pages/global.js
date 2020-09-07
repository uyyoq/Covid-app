import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux"
import Navbar from '../components/Navbar'
import Fab from '../components/Fab/fab'
import styled from "styled-components";
import { API_COVID_GLOBAL } from "../constant/API_URL"
import Info from './info';
// import { connect } from "react-redux"
import {useDispatch} from "react-redux"
// import axios from "axios"
// import actionFetchArticles from "../appredux/actionCreator/actionFetchArticles"

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
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

const global = (props) => {
  // const dispatch = useDispatch()
  const[data, setData] = useState([])

  const showInfo = useSelector(state => state.navbarReducer.showInfo)
  const data = useSelector(state => state.list)

  useEffect(async() => {
     await dispatch(actionFetchArticles())
     
    const fetchData = async () => {
      const result = await axios("https://newsapi.org/v2/everything?q=covid&apiKey=4055e2c89faa40e384b1dd16c0daef44",);
      
      await setData(result.data.articles) //dispatch
    };

    fetchData()
  }, []);

  return (
    <Container>
      <Navbar />
      <h1>Covid News - Global</h1>
      {
        showInfo ? (
          data.map(data => (
            <Wrapper>
              <Link href={data.url} target="_blank">
                <Title>{data.title}</Title>
                <Source>{data.source.name}</Source>
              </Link>
            </Wrapper>
          ))
        ) : (<Info />)
      }
      <Fab />
    </Container>
  )
}

// export const getServerSideProps = async () => {
//   try {
//     const res = await fetch(`${API_COVID_GLOBAL}`)
//     const data = await res.json()
//     return {
//       props:
//         { data }
//     }
//   } catch (error) {
//     return {
//       props: {}
//     }
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     showInfo: state.navbarReducer.showInfo
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     actionFetchArticles: () => dispatch(actionFetchArticles())
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(global)
export default global