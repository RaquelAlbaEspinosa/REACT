import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export const Clases = () => {
  const [type, setType] = useState();

  useEffect(() => {
    axios
      .get("https://www.dnd5eapi.co/api/classes")
        .then((res) => {setType(res.data)})
        .catch((err) => console.log(err))
  }, []);
  console.log(type);

  const navigate = useNavigate();

  return (
    <Row className='classesPpal'>
      <Col xs={12}><h2>Classes</h2></Col>
      {type ?
        type.results.map((clase, index) => {
          return(
          <Col xs={12} md={4} lg={2} className="classes">
            <p key={index} onClick={() => navigate(`/clase/${clase.index}`)}>{clase.name}</p>
          </Col>
          )
        })
        : <p>Cargando...</p>
      }

    </Row>
  )
}
