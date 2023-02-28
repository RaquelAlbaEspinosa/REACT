import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom'

export const Subclass = () => {
    const [sub, setSub] = useState();
    const {id} = useParams();
    useEffect(() => {
        axios
            .get(`https://www.dnd5eapi.co/api/subclasses/${id}`)
                .then((res) => setSub(res.data))
                .catch((err) => console.log(err))
    }, [])
  return (
    <Row className={`${sub?.class.index} subclass`}>
        <Col xs = {12}><h1>{sub?.name}</h1></Col>
        <Row className='desc'>
            <Col xs = {12}><h3>Class: {sub?.class.name}</h3></Col>
            {sub?.desc.map((subclass, index) => {
                return(
                    <Col xs = {12} key = {index}><p>{subclass}</p></Col>
                )
            })}
        </Row>
    </Row>
  )
}
