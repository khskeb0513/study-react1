import {Button, Col, Image, Modal, Row} from "react-bootstrap";
import React from "react";
import miraeB1 from "./miraeB1.png";
import './seatPicModal.css'

interface myModalProps {
    show: Boolean;
    onHide: any;
}

const seatPicModal = (props: myModalProps) => {
    return (
        <Modal {...props} size={"lg"}>
            <Modal.Header closeButton>
                <Modal.Title>열람실 좌석배치도</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col>
                        <Image src={miraeB1} fluid/>
                    </Col>
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="dark" onClick={props.onHide}>
                    닫기
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default seatPicModal
