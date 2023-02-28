import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

export const Equipment = () => {
    const [equip, setEquip] = useState();
    const {id} = useParams();

    useEffect(() => {
        axios
            .get(`https://www.dnd5eapi.co/api/equipment/${id}`)
                .then((res) => setEquip(res.data))
                .catch((err) => console.log(err))
    }, [])
  return (
    <Row className='equipment oneEquip'>
        <Col xs = {12}><h1>{equip?.name}</h1></Col>
        <Row className='desc'>
            <Col xs = {12}><h3>Weight: {equip?.weight}</h3></Col>
            <Col xs = {12}><h4>Equipment category: {equip?.equipment_category.name}</h4></Col>
            {equip?.desc.map((des, index) => {
                return(
                    <Col xs = {12} key={index}><p>{des}</p></Col>
                )
            })}
        </Row>
    </Row>
  )
}
