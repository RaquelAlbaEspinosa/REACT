import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { DndNavbar } from './components/DndNavbar'
import { About } from './pages/About/About'
import { Clases } from './pages/Clases/Clases'
import { Error } from './pages/Error/Error'
import { Home } from './pages/Home/Home'
import "./DndApp.scss"
import { Container } from 'react-bootstrap'
import { Class } from './components/clase/Class'
import { OneProficiency } from './components/proficiencies/OneProficiency'
import { AllProficiencies } from './components/proficiencies/AllProficiencies'
import { Skills } from './components/proficiencies/Skills'
import { OneSkill } from './components/proficiencies/OneSkill'
import { Equipment } from './components/proficiencies/Equipment'
import { AbilityScores } from './components/ability_scores/AbilityScores'
import { Subclass } from './components/clase/Subclass'

export const DndApp = () => {
  return (
        <BrowserRouter>
            <DndNavbar />
            <Container fluid>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/clases' element={<Clases />} />
                <Route path='/clase/:id' element={<Class />} />
                <Route path='/equipment-categories' element={<AllProficiencies />} />
                <Route path='/equipment-categories/:id' element={<OneProficiency />} />
                <Route path='/equipment/:id' element={<Equipment />} />
                <Route path='/skills' element={<Skills />} />
                <Route path='/skills/:id' element={<OneSkill />} />
                <Route path='/ability_scores' element={<AbilityScores />} />
                <Route path='/subclass/:id' element={<Subclass />} />
                <Route path='*' element={<Error />} />
            </Routes>
            </Container>
        </BrowserRouter>
  )
}
