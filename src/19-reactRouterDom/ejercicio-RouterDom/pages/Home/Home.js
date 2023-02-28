import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'

export const Home = () => {
  const [num, setNum] = useState();

  const rollInitiative = (n) => {
    setNum(parseInt(Math.random() * (21 - 1) + 1));
  }

  return (
    <Row className='home'>
      <Col xs={12}>
        <h1 className='welcome'>WELCOME</h1>
      </Col>
      <Col xs={12} lg={7}>
        <h2>ROLL FOR</h2>
        <h1>INITIATIVE</h1>
      </Col>
      <Col className='dice'>
        <div className="background">
          <div className="homeDice">
            <p>{num}</p>
          </div>
        </div>
        <button onClick={rollInitiative}>ROLL!!</button>
      </Col>
    </Row>
  )
}
