import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export const AllProficiencies = () => {
    const [allEquip, setAllEquip] = useState();
    const navigate = useNavigate();
    useEffect(() => {
        axios
            .get(`https://www.dnd5eapi.co/api/equipment-categories`)
                .then((res) => setAllEquip(res.data.results))
                .catch((err) => console.log(err))
    }, [])
  return (
    <Row className='equipment'>
        <Col xs = {12}><h1>Equipment</h1></Col>
        {allEquip?.map((equip, index) => {
            return(
                <Col xs={12} sm = {4} key={index} className="one"><p onClick={() => navigate(`/equipment-categories/${equip.index}`)}>{equip.name}</p></Col>
            )
        })}
    </Row>
  )
}
