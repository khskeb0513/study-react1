import {Button, Modal} from "react-bootstrap";
import React from "react";

interface MyModalProps {
    show: Boolean;
    onHide: any;
}

const MyModal = (props: MyModalProps) => {
    return (
        <Modal {...props}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.onHide}>
                    Close
                </Button>
                <Button variant="primary" onClick={props.onHide}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default MyModal