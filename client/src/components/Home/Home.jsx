import Button from 'react-bootstrap/Button';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import Container from 'react-bootstrap/Container';
import React from 'react'
import s from './Home.module.css';
import BoxColor from '../Boxes/BoxColor/Boxes';
import BoxImage from '../Boxes/BoxImage/Boxes';
import {MdSportsTennis, MdBloodtype, MdCastForEducation} from 'react-icons/md';
import {FaHandHoldingMedical, FaVirus, FaPeopleArrows} from 'react-icons/fa';
import {GiFallingBlob} from 'react-icons/gi';
import Cards from '../Card/Card';

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
        <Button className="button" variant="primary">Primary</Button>
        <a className={s.link} href="#">Become a Volunteer?</a>
      </div>
    </Container>
    </ThemeProvider>
    </div>
    <div className={s.container2}>
      <div>
        <h1>Various Causes</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown was popularised.</p>
        <Button className="button" variant="primary">Learn more</Button>
      </div>
      <div className={s.divBoxes}>
        <BoxColor name="Sports" Icon1={MdSportsTennis} />
        <BoxColor name="Medical" Icon1={FaHandHoldingMedical} />
        <BoxColor name="Blood" Icon1={MdBloodtype} />
        <BoxColor name="Education" Icon1={MdCastForEducation} />
        <BoxColor name="Natural disaster" Icon1={GiFallingBlob} />
        <BoxColor name="Covid - 19" Icon1={FaVirus} />
      </div>
    </div>
    <div className={s.container3}>
      <div>
        <h1>Latest caused of <span>GROOMING ARGENTINA</span></h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown was popularised. It is a long established fact that reader distracted by the the readable content off page looking at its layout point.</p>
        <div className={s.divCards}>
          <Cards tittle="Event Registration" body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. " imgUrl="https://images.pexels.com/photos/1212805/pexels-photo-1212805.jpeg?auto=compress&cs=tinysrgb&w=1600" />
          <Cards tittle="Monthly Donation" body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. " imgUrl="https://images.pexels.com/photos/1815257/pexels-photo-1815257.jpeg?auto=compress&cs=tinysrgb&w=1600" />
          <Cards tittle="Donate Now" body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. " imgUrl="https://images.pexels.com/photos/939702/pexels-photo-939702.jpeg?auto=compress&cs=tinysrgb&w=1600" />
        </div>
        <Button className='button' variant="primary">More causes</Button>
      </div>
    </div>
    <div className={s.container4}>
      <div>
        <Container>
          <h1>Events</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown was popularised. It is a long established fact that reader distracted by the the readable content off page looking at its layout point.</p>
        </Container>
      </div>
    </div>
    <div className={s.container5}>
      <BoxImage src="https://images.pexels.com/photos/14679223/pexels-photo-14679223.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" />
      <BoxImage src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1600" />
      <BoxColor name="Specialized conferences" Icon1={FaPeopleArrows} />
      <BoxColor name="Psychological support" Icon1={FaPeopleArrows} />
      <BoxImage src="https://images.pexels.com/photos/14679223/pexels-photo-14679223.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" />
      <BoxImage src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1600" />
      <BoxImage src="https://images.pexels.com/photos/14679223/pexels-photo-14679223.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" />
      <BoxColor name="Psychological support" Icon1={FaPeopleArrows} />
      <BoxImage src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1600" />
    </div>
    </>
  )
}

export default Home