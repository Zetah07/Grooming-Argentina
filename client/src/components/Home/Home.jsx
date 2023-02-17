import Button from 'react-bootstrap/Button';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import Container from 'react-bootstrap/Container';
import React from 'react'
import s from './Home.module.css';
import Boxes from '../Boxes/Boxes';
import {MdSportsTennis, MdBloodtype, MdCastForEducation} from 'react-icons/md'
import {FaHandHoldingMedical, FaVirus} from 'react-icons/fa'
import {GiFallingBlob} from 'react-icons/gi'

const Home = () => {
  return (
    <>
      <div className={s.container1}>
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
      <Container>
      <h1>Your <span>support</span> can help us a lot</h1>
      <div>
        <p>This help is focussed towards the poor and the needy who live among us within our society and endeavours to bring about a change in their life - a "MAATRAM".</p>
      </div>
      <div className={s.divBecome}>
        <Button className={s.btn} variant="primary">Primary</Button>
        <a className={s.link} href="#">Become a Volunteer?</a>
      </div>
    </Container>
    </ThemeProvider>
    </div>
    <div className={s.container2}>
      <div>
        <h1>Various Causes</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown was popularised.</p>
        <Button className={s.btn} variant="primary">Learn more</Button>
      </div>
      <div className={s.divBoxes}>
        <Boxes name="Sports" Icon1={MdSportsTennis} />
        <Boxes name="Medical" Icon1={FaHandHoldingMedical} />
        <Boxes name="Blood" Icon1={MdBloodtype} />
        <Boxes name="Education" Icon1={MdCastForEducation} />
        <Boxes name="Natural disaster" Icon1={GiFallingBlob} />
        <Boxes name="Covid - 19" Icon1={FaVirus} />
      </div>
    </div>
    </>
  )
}

export default Home