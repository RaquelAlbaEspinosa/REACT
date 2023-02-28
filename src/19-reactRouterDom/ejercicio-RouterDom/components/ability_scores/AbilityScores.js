import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap';

export const AbilityScores = () => {
    const [abilities, setAbilities] = useState();
    const [ability, setAbility] = useState();

    useEffect(() => {
        axios
            .get(`https://www.dnd5eapi.co/api/ability-scores`)
                .then((res) => setAbilities(res.data.results))
                .catch((err) => console.log(err))
    }, [])
    const selectAbility = (index) => {
        axios
            .get(`https://www.dnd5eapi.co/api/ability-scores/${index}`)
                .then((res) => setAbility(res.data))
                .catch((err) => console.log(err))
    }
  return (
    <Row className='abilityScores'>
        <Col xs = {12}><h1>Ability scores</h1></Col>
        {abilities?.map((abil, index) => {
            return(
                <Col xs = {12} sm = {4} key={index} className="ability">
                    <h3 onClick={() => selectAbility(abil.index)}>{abil.name}</h3>
                </Col>
            )
        })}
        <Row className='extended'>
            <Col xs = {12}><h2>{ability?.full_name}</h2></Col>
            {ability?.desc.map((abil, index) => {
                return(
                    <Col xs = {12} key = {index}><p>{abil}</p></Col>
                )
            })}
        </Row>
    </Row>
  )
}
