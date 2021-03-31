import React, {useReducer} from "react";
import {Alert, Button, Col, Form, Modal, Row} from "react-bootstrap";

interface loginModalProps {
    show: Boolean;
    onHide: any;
    goRegister: any;
    parentDispatch: any;
}

interface userForm {
    email: string;
    password: string;
}

const initialState = {
    alert: false,
    email: '',
    password: ''
}

const reducer = (state: any, action: any) => {
    switch (action.type) {
        case 'email': {
            return {...state, email: action.e.target.value}
        }
        case 'password': {
            return {...state, password: action.e.target.value}
        }
        case 'alert': {
            return {...state, alert: action.alert}
        }
    }
}

const mockUser = {
    email: 'xxx@pukyong.ac.kr',
    password: 'pukyong'
}

const LoginModal = (props: loginModalProps) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const checkUser = (user: userForm) => {
        if (user.email === mockUser.email && user.password === mockUser.password) {
            dispatch({type: 'alert', alert: false})
            props.onHide()
            props.parentDispatch({type: 'loginBtn'})
        } else {
            dispatch({type: 'alert', alert: true})
        }
    }
    return (
        <Modal show={props.show} onHide={props.onHide}>
            <Modal.Header closeButton>
                <Modal.Title>로그인 / 회원가입</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col>
                        <Form>
                            <Form.Group controlId="email">
                                <Form.Label>학사 이메일</Form.Label>
                                <Form.Control onChange={e => dispatch({type: 'email', e})} type="email"
                                              placeholder="xxx@pukyong.ac.kr"/>
                            </Form.Group>
                            <Form.Group controlId="password">
                                <Form.Label>비밀번호</Form.Label>
                                <Form.Control onChange={e => dispatch({type: 'password', e})} type="password"
                                              placeholder="비밀번호"/>
                            </Form.Group>
                            {/*<Form.Group controlId="autoLoginCheckBox">*/}
                            {/*    <Form.Check type="checkbox" label=" 자동 로그인" />*/}
                            {/*</Form.Group>*/}
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Alert variant={'danger'} show={state.alert}>
                            사용자 정보를 찾을 수 없습니다.
                        </Alert>
                    </Col>
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="dark" onClick={() => checkUser({email: state.email, password: state.password})}>
                    로그인
                </Button>{''}
                <Button variant="primary" onClick={() => props.goRegister()}>
                    회원가입
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default LoginModal
