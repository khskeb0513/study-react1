import React from "react";
import {Card, Col, Row} from "react-bootstrap";
import Blank from '../blank/blank'

interface commentFormProps {
    author: string,
    time: string,
    body: string
}

const commentForm = (props: commentFormProps) => {
    return (
        <>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>by. {props.author} [{props.time}]</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                {props.body}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Blank></Blank>
        </>
    )
}

export default commentForm
