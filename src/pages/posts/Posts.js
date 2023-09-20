import React, { useEffect } from 'react'
import { Badge, Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from "uuid"
import { getPosts } from '../../Redux/action';

const Posts = () => {
    const { data, loading, error } = useSelector(s => s.posts)
    const { itemid } = useParams()
    const list = itemid.split("-")
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPosts(list[2]))
    }, [])
    return (
        <Container>
            <Row>
                { loading ? <div className='main' ><span className="loader"></span></div> : error ? <Badge> { error }</Badge> : data.map(item =>
                    <Col key={ uuidv4() } md="6" lg="4" xl="3" className='mb-4'>
                        <Card className="text-center" >
                            <Card.Title>{ item.title }</Card.Title>
                            <Card.Body>
                                <Card.Text>
                                    { item.body }
                                </Card.Text>
                                <Button variant="primary" as={ Link } to={ `comments-${item.id}` }
                                >comments</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                )

                }
            </Row>
        </Container>
    )
}

export default Posts