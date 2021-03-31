import React, {useEffect, useReducer} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Col, Container, FormControl, Row} from "react-bootstrap";
import SeatPicModal from './Components/SeatPicModal/SeatPicModal'
import Blank from './Components/Blank/Blank'
import SeatTime from './Components/SeatTime/SeatTime'
import Comment from './Components/Comment/Comment'
import LoginModal from './Components/LoginModal/LoginModal'
import RegisterModal from './Components/RegisterModal/RegisterModal'
import NavigationBar from "./Components/NavigationBar/NavigationBar";

const initialState = {
    seatPicModal: false,
    loginModal: false,
    registerModal: false,
    loginBtn: true
}

const reducer = (state: any, action: any) => {
    switch (action.type) {
        case 'seatPicModal': {
            return {...state, seatPicModal: !state.seatPicModal}
        }
        case 'loginModal': {
            return {...state, loginModal: !state.loginModal}
        }
        case 'registerModal': {
            return {...state, registerModal: !state.registerModal}
        }
        case 'loginBtn': {
            return {...state, loginBtn: !state.loginBtn}
        }
    }

}

const App = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    useEffect(() => {
        document.title = '부경대 열람실 좌석확인'
    })
    return (
        <div className="App">
            <NavigationBar
                parentDispatch={(e: any) => dispatch(e)}
                state={state}/>
            <Container>
                <Blank/>
                <Blank/>
                <Row>
                    <Col>
                        <FormControl type="number" placeholder="좌석번호"/>
                    </Col>
                    <Col>
                        <Button variant={"primary"}>검색</Button>{' '}
                        <Button variant={"dark"} onClick={() => dispatch({type: 'seatPicModal'})}>좌석배치도</Button>
                    </Col>
                </Row>
                <Blank/>
                <Blank/>
                <Row>
                    <Col>
                        <h4>
                            검색결과:
                        </h4>
                        <hr/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <SeatTime/>
                    </Col>
                </Row>
                <Blank/>
                <Blank/>
                <Comment/>
            </Container>
            <SeatPicModal show={state.seatPicModal} onHide={() => dispatch({type: 'seatPicModal'})}/>
            <LoginModal
                show={state.loginModal}
                onHide={() => dispatch({type: 'loginModal'})}
                parentDispatch={(e: any) => dispatch(e)}
                goRegister={() => {
                    dispatch({type: 'loginModal'})
                    dispatch({type: 'registerModal'})
                }}/>
            <RegisterModal show={state.registerModal} onHide={() => dispatch({type: 'registerModal'})}/>
        </div>
    )
}

export default App;
