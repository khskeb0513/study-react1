import React, {useEffect, useReducer} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Col, Container, Form, FormControl, Nav, Navbar, Row} from "react-bootstrap";
import MyModal from './components/myModal/myModal'

const initialState = {
    title: 'default title',
    brandName: 'React-Bootstrap',
    modalShow: false
}

const reducer = (state: any, action: any) => {
    switch (action.type) {
        case 'title': {
            return {...state, title: action.e.target.value}
        }
        case 'brandName': {
            return {...state, brandName: action.e.target.value}
        }
        case 'modalShow': {
            return {...state, modalShow: !state.modalShow}
        }
    }

}

const App = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    useEffect(() => {
        document.title = state.title
    })
    return (
        <div className="App">
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">{state.brandName}</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl name={'title'} onChange={e => dispatch({type: 'title', e})} type="text"
                                     placeholder="title"
                                     className="mr-sm-2"/>
                        <FormControl name={'brandName'} onChange={e => dispatch({type: 'brandName', e})} type="text"
                                     placeholder="brandName"
                                     className="mr-sm-2"/>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
            <Container>
                <Row>
                    <Col>
                        <p/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button variant={"dark"} onClick={() => dispatch({type: 'modalShow'})}>modalShow</Button>
                    </Col>
                </Row>
            </Container>
            <MyModal show={state.modalShow} onHide={() => dispatch({type: 'modalShow'})}/>
        </div>
    )
}

export default App;
