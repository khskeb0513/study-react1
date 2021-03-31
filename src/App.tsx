import React, {useEffect, useReducer} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Col, Container, FormControl, Nav, Navbar, Row} from "react-bootstrap";
import SeatPicModal from './components/seatPicModal/seatPicModal'
import Blank from './components/blank/blank'
import SeatTime from './components/seatTime/seatTime'
import Comment from './components/comment/comment'
import LoginModal from './components/loginModal/loginModal'
import RegisterModal from './components/registerModal/registerModal'
import pknuLogo from './pknu.svg'

const initialState = {
    seatPicModal: false,
    loginModal: false,
    registerModal: false
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
    }

}

const App = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    useEffect(() => {
        document.title = '부경대 열람실 좌석확인'
    })
    return (
        <div className="App">
            <Navbar variant={"dark"} className={'navbar-custom'} expand="lg">
                <Navbar.Brand href="#home">
                    <img className={'navbar-logo'} width={36} height={36} src={pknuLogo} alt={'부경대 로고'}/>{' '}
                    LIBISOR.COM
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse className="basic-navbar-nav, justify-content-end">
                    <Nav.Link className={'navbar-link'} href={"#home"}>열람실 좌석확인</Nav.Link>
                    <Nav.Link className={'navbar-link'} onClick={() => dispatch({type: 'loginModal'})}>로그인 / 회원가입</Nav.Link>
                </Navbar.Collapse>
            </Navbar>
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
                goRegister={() => {
                    dispatch({type: 'loginModal'})
                    dispatch({type: 'registerModal'})
                }}/>
            <RegisterModal show={state.registerModal} onHide={() => dispatch({type: 'registerModal'})}/>
        </div>
    )
}

export default App;
