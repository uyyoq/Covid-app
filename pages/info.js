import styled from "styled-components";
import { connect } from "react-redux"
import { HANDLE_SHOW_INFO } from "../appredux/actionType/navbarActionType"

const Container = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 margin: 0 auto;
 width: 100%;
`;

const ListCont = styled.div`
  border: 1px solid black;
  margin-top: 10px;
`;

const Wrap = styled.div`
  padding: 90px 100px 100px 100px;
`;

const ContClose = styled.img`
  width: 30px;
  height: 30px;
`;

const CloseImg = "/x.svg"

const CloseBtn = styled.div`
postition: fixed;
padding: 10px;
float: right;
cursor: pointer;
width: 35px;
height: 30px;
`;

const Info = (props) => {
  return (
    <Container>
      <ListCont>
        <CloseBtn>
          <ContClose onClick={props.handleShowInfo} src={CloseImg} alt="close-button-img" />
        </CloseBtn>
        <Wrap>
          <ul>
            <li>Dikonfirmasi: 170 rb </li>
            <li>Sembuh: 82.236 </li>
            <li>Meninggal: 5.765 </li>
          </ul>
        </Wrap>
      </ListCont>
    </Container>
  )
}

const mapStateToProps = (state) => {
  return {
 showInfo: state.navbarReducer.showInfo
}  
}

const mapDispactToProps = (dispatch) => {
  return {
    handleShowInfo: () => dispatch({ type: HANDLE_SHOW_INFO })
  }
}


export default connect(mapStateToProps, mapDispactToProps)(Info);