import React from "react";
import {Card, Col, Row} from "react-bootstrap";
import Blank from '../Blank/Blank'

interface commentFormProps {
    author: string,
    time: string,
    body: string
}

const CommentForm = (props: commentFormProps) => {
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
            <Blank/>
        </>
    )
}

export default CommentForm
