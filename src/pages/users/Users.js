import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts, getUsers } from '../../Redux/action';
import { Badge, Breadcrumb, Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from "uuid"

const Users = () => {
    const { data, loading, error } = useSelector(s => s.users)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(getUsers())
    }, [])
    return (<>
        <Container>
            <Row>
                { loading ? <div className='main' ><span className="loader"></span></div> : error ? <Badge> { error }</Badge> : data.map(item =>
                    <Col key={ uuidv4() } md="6" lg="4" xl="3" className='mb-4'>
                        <Card className="text-center" >
                            <Card.Footer>{ item.id }</Card.Footer>
                            <Card.Header>{ item.username }</Card.Header>
                            <Card.Body>
                                <Card.Title>{ item.name }</Card.Title>
                                <Card.Text>
                                    { item.email }
                                </Card.Text>
                                <Button variant="primary" as={ Link } to={ `${item.username}-post-${item.id}` } onClick={ () =>
                                    navigate("/posts")

                                }>posts</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ) }
            </Row>
        </Container>
    </>
    )
}

export default Users