import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom'

export const Class = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [clase, setClase] = useState();
    const [background, setBackground] = useState();

    useEffect(() => {
        axios
            .get(`https://www.dnd5eapi.co/api/classes/${id}`)
                .then((res) => setClase(res.data))
                .catch((err) => console.log(err))
    }, []);
    useEffect(() => {
        setBackground(clase?.index);
    }, [clase && clase])

    console.log(clase);
  return (
    <Row className={`clase ${background}`}>
        <Col xs={12}><h2>{clase?.name}</h2></Col>
        <Row className='characteristics'>
        <Col xs={12}><h4>Proficiencies:</h4></Col>
        {clase?.proficiencies.map((prof, index) => {
            return(
            <Col xs={12} sm={4} key={index} className="proficiencies">
                {!prof.name.includes("Saving Throw") && <p onClick={() => navigate(`/equipment-categories/${prof.index}`)}>{prof.name}</p>
                }
            </Col>
            )
        })}
        <Col xs={12}><h4>Proficiency choices:</h4></Col>
        {clase?.proficiency_choices && 
        clase?.proficiency_choices.map((choose, index) => {
        return (
            <Row className="choices">
                <Col xs={12} key={index}><p>{choose.desc}.</p></Col>
                {choose.from.options.map((opt, index) => {
                     let name = opt.item?.name;
                     let bool = true;
                    if(opt.item?.name.includes(":")){
                        name = opt.item.name.split(": ");
                        name = name[1]
                        bool = false;
                    }
                    let newIndex = opt.item?.index.split("skill-");
                    return(
                    <Col xs={12} sm={4} key={index} className="proficiencies"><p onClick={() => navigate(bool ? `/equipment/${opt.item.index}` : `/skills/${newIndex[1]}`)}>{name ? name : opt.choice.desc}</p></Col>
                    )
                })}
            </Row>
        )})}
       
        <Col xs={12}><h4>Saving throws:</h4></Col>
        {clase?.saving_throws.map((sav, index) => {
            let saving = "";
            switch (sav.name) {
                case "DEX":
                    saving = "Dexterity"
                    break;
                case "CHA":
                    saving = "Charisma"
                    break;
                case "WIS":
                    saving = "Wisdom"
                    break;
                case "INT":
                    saving = "Intelligence"
                    break;
                case "CON":
                    saving = "Constitution"
                    break;
                case "STR":
                    saving = "Strength"
                    break;
            }
            return(
            <Col xs={12} sm={4} key={index} className="proficiencies"><p>{saving}</p></Col>
            )
        })}
        <Col xs={12}><h4>Starting equipment:</h4></Col>
        {clase?.starting_equipment.map((equip, index) => {
            return(
            <Col xs={12} sm={4} key={index} className="proficiencies"><p onClick={() => navigate(`/equipment/${equip.equipment.index}`)}>{equip.equipment.name}</p></Col>
            )
        })}
        <Col xs={12}><h4>Starting equipment options:</h4></Col>
        {clase?.starting_equipment_options.map((equip, index) => {
            return(
            <div className="equipOpt" key={index}>
                <Col xs = {12}><p>Choose {equip.choose} from:</p></Col>
                <Col xs={12}><p>{equip.desc}</p></Col>
            </div>
            )
        })}
        {clase?.spellcasting && 
        <Col xs={12}><h4>Spellcasting:</h4></Col>}
        {clase?.spellcasting?.info.map((spell, index) => {
            return(
            <Col xs = {12} key={index}><p>{spell.desc}</p></Col>
            )
        })}
        <Col xs={12}><h4>Subclasses:</h4></Col>
        {clase?.subclasses.map((sub, index) => {
            return(
            <Col xs={12} sm={4} key={index} className="proficiencies" onClick={() => navigate(`/subclass/${sub.index}`)}><p>{sub.name}</p></Col>
            )
        })}
        </Row>
    </Row>
  )
}
