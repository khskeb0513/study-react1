import React from "react";
import {Button, Col, Form, Modal, Row} from "react-bootstrap";

interface registerModalProps {
    show: boolean;
    onHide: any;
}

const registerModal = (props: registerModalProps) => {
    return (
        <Modal {...props}>
            <Modal.Header closeButton>
                <Modal.Title>회원가입</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col>
                        <Form>
                            <Form.Group controlId="email">
                                <Form.Label>학사 이메일</Form.Label>
                                <Form.Control type="email" placeholder="xxx@pukyong.ac.kr" />
                            </Form.Group>
                            <Form.Group controlId="password">
                                <Form.Label>비밀번호</Form.Label>
                                <Form.Control type="password" placeholder="비밀번호" />
                            </Form.Group>
                            <Form.Group controlId="rePassword">
                                <Form.Control type="password" placeholder="비밀번호 재입력" />
                            </Form.Group>
                            <Form.Group controlId="autoLoginCheckBox">
                                <Form.Check type="checkbox" label=" 자동 로그인" />
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary">
                    회원가입
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default registerModal
