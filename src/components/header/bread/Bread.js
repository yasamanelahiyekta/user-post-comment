import React from 'react'
import { Breadcrumb } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
const Bread = ({ bread }) => {
    const newbread = bread.shift()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    return (
        <>
            <Breadcrumb style={ { marginLeft: "2rem" } }>
                { bread.map((item, index) =>
                    <Breadcrumb.Item active onClick={ () => navigate((() => {
                        const help = JSON.parse(JSON.stringify(bread))
                        help.splice(index + 1)
                        return help.join("/")
                    })()) } key={ uuidv4() }>{ item.split("-")[0] }</Breadcrumb.Item>
                ) }
            </Breadcrumb>
        </>
    )
}

export default Bread