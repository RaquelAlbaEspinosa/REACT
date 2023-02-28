import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export const Skills = () => {
    const [skills, setSkills] = useState();
    const navigate = useNavigate();
    useEffect(() => {
        axios
            .get(`https://www.dnd5eapi.co/api/skills`)
                .then((res) => setSkills(res.data))
                .catch((err) => console.log(err))
    }, [])
    console.log(skills);
  return (
    <Row className='equipment skills'>
        <Col xs = {12}><h1>Skills</h1></Col>
        {skills?.results?.map((skill, index) => {
            return(
                <Col xs = {12} sm = {4} key={index}><p onClick={() => navigate(`/skills/${skill.index}`)}>{skill.name}</p></Col>
            )
        })}
    </Row>
  )
}
