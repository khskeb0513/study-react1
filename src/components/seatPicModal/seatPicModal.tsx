import {Button, Col, Image, Modal, Row} from "react-bootstrap";
import React from "react";
import miraeB1 from "./miraeB1.png";

interface MyModalProps {
    show: Boolean;
    onHide: any;
}

const SeatPicModal = (props: MyModalProps) => {
    return (
        <Modal {...props}>
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
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default SeatPicModal
