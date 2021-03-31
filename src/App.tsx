import React, {useEffect, useReducer} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Col, Container, FormControl, Nav, Navbar, Row} from "react-bootstrap";
import SeatPicModal from './components/seatPicModal/seatPicModal'
import Blank from './components/blank/blank'
import SeatTime from './components/seatTime/seatTime'
import CommentForm from './components/commentForm/commentForm'
import pknuLogo from './pknu.svg'

const initialState = {
    modalShow: false
}

const reducer = (state: any, action: any) => {
    switch (action.type) {
        case 'modalShow': {
            return {...state, modalShow: !state.modalShow}
        }
    }

}

const dummyCommentData = [
    {
        author: '새누리',
        time: '2000/00/01 00:00:00',
        body: '잰 언제까지 자리차지 하는거지?'
    }, {
        author: '더민주',
        time: '2000/00/01 00:00:00',
        body: '꼽냐?'
    }
]

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
                    <Nav.Link className={'navbar-link'} href={'#login'}>로그인 / 회원가입</Nav.Link>
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
                        <Button variant={"dark"} onClick={() => dispatch({type: 'modalShow'})}>좌석배치도</Button>
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
                <Row>
                    <Col>
                        <h4>
                            코멘트: {'test건'}
                        </h4>
                        <hr/>
                    </Col>
                </Row>
                {dummyCommentData.map(v => {
                    return (<CommentForm author={v.author} time={v.time} body={v.body}/>)
                })}
            </Container>
            <SeatPicModal show={state.modalShow} onHide={() => dispatch({type: 'modalShow'})}/>
        </div>
    )
}

export default App;
