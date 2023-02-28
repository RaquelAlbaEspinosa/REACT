import axios from 'axios'
import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'

export const About = () => {
  return (
    <Row className='about'>
      <Col xs={12}>
        <h1>What is DnD?</h1>
      </Col>
      <Col xs={12} lg={6} className="text">
          <p> 
            "In Dungeons & Dragons, the players form an adventuring party who explore fantasy worlds together as they embark on epic quests and level up in experience. The Dungeon Master (also known as the DM) is the game's referee and storyteller. There’s no winning or losing in D&D—at least, not in the conventional way.
          </p>

          <p>
            Dungeons & DragonsAt its heart, D&D is a game that focuses on storytelling. The dice just help you along. Everything is your decision, from what you look like, to how you act, to what happens next.
          </p>

          <p>
            The collective creativity in your D&D game builds stories that you’ll tell again and again—ranging from the stuff of legend to absurd incidents that’ll make you laugh years later.
          </p>

          <p>
            Have fun and remember the golden rule—never split the party!"
          </p>

          <p>
            (Credits to: https://dnd.wizards.com/what-is-dnd)
          </p>
        </Col>
        <Col>
          <img src="/images/Dnd/playingDnd.jpg" alt="" />
        </Col>
      </Row>
  )
}
