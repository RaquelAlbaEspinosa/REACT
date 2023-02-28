import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap';

export const OneProficiency = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [prof, setProf] = useState();
    console.log(id);
    useEffect(() => {
        axios
            .get(`https://www.dnd5eapi.co/api/equipment-categories/${id}`)
                .then((res) => setProf(res.data))
                .catch((err) => console.log(err))
    }, []);
    console.log(id)
  return (
    <Row className='equipment'>
      <Col xs = {12}><h1>{prof?.name}</h1></Col>
      {prof?.equipment?.map((equip, index) => {
        return(
          <Col xs = {12} sm = {4} key={index}><p onClick={() => navigate(`/equipment/${equip.index}`)}>{equip.name}</p></Col>
        )
      })}
    </Row>
  )
}
