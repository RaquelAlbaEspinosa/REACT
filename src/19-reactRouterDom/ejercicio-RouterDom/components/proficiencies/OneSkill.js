import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

export const OneSkill = () => {
  const [skill, setSkill] = useState();
  const {id} = useParams();
  console.log(id);

  useEffect(() => {
    axios
      .get(`https://www.dnd5eapi.co/api/skills/${id}`)
        .then((res) => setSkill(res.data))
        .catch((err) => console.log(err))
  }, [])
  return (
    <Row className='oneSkill skills'>
      <Col xs = {12}><h1>{skill?.name}</h1></Col>
      <Row className='desc'>
        <Col xs = {12}><h3>Ability score: {skill?.ability_score.name}</h3></Col>
        {skill?.desc.map((des, index) => {
          return(
            <Col xs = {12} key={index}><p>{des}</p></Col>
          )
        })}
      </Row>
    </Row>
  )
}
