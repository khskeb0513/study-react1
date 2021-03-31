import React from 'react'
import {Col, Row} from "react-bootstrap";
import CommentForm from "../CommentForm/CommentForm";

const dummyCommentData = [
    {
        author: '자리좀',
        time: '2000/00/01 00:00:00',
        body: '쟨 언제까지 자리차지 하는거지?'
    }, {
        author: '볼펜좀',
        time: '2000/00/01 00:00:00',
        body: '저기 볼펜 하나 올려져 있던데'
    }
]

const Comment = () => {
    return (
        <>
            <Row>
                <Col>
                    <h4>
                        코멘트: {dummyCommentData.length}건
                    </h4>
                    <hr/>
                </Col>
            </Row>
            {dummyCommentData.map(v => {
                return (<CommentForm author={v.author} time={v.time} body={v.body}/>)
            })}
        </>
    )
}

export default Comment
