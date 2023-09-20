import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getComments } from '../../Redux/action'
import { v4 as uuidv4 } from "uuid"
import { useParams } from 'react-router-dom'
import { Badge, Button, Card, Col, Container, Row } from 'react-bootstrap'

const Comments = () => {
    const { data, loading, error } = useSelector(s => s.comments)
    const { postid } = useParams()
    const list = postid.split("-")
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getComments(list[1]))
    }, [])
    return (
        <Container>
            <Row>
                { loading ? <div className='main' ><span className="loader"></span></div> : error ? <Badge> { error }</Badge> : data.map(item =>
                    <Col key={ uuidv4() } md="6" lg="4" xl="3" className='mb-4'>
                        <Card className="text-center" >
                            <Card.Header>{ item.name }</Card.Header>
                            <Card.Title>{ item.email }</Card.Title>

                            <Card.Body>
                                <Card.Text>
                                    { item.body }
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>{ item.id }</Card.Footer>
                        </Card>
                    </Col>
                )

                }
            </Row>
        </Container>
    )
}

export default Comments