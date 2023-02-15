import React from 'react'
import styles from './LandingPage.module.css';
import {Box, Button, Container} from '@mui/material';
import Cards from '../Card/Card';

const LandingPage = () => {
  return (
    <Container>
      <div className={styles.background}>
      <div className={styles.information}>
        <h1>Your support can help us a lot</h1>
        <h2>This help is focussed towards the poor and the needy who live among us within our society and endeavours to bring about a change in their life - a "GROOMING ARGENTINA".</h2>
        <Button className='btn' size='large' variant='contained'>Donate now</Button>
      </div>
      <Box>
      <Box>
        <h1>Varius Causes</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown was popularised.</p>
        <Button size='large' variant='contained'>Learn more</Button>
      </Box>
      <Box>
          <Cards name="Sports" imgUrl="https://images.pexels.com/photos/1661950/pexels-photo-1661950.jpeg?auto=compress&cs=tinysrgb&w=1600" />
          <Cards name="Medical" imgUrl="https://images.pexels.com/photos/1170979/pexels-photo-1170979.jpeg?auto=compress&cs=tinysrgb&w=1600" />
          <Cards name="Blood" imgUrl="https://images.pexels.com/photos/4230623/pexels-photo-4230623.jpeg?auto=compress&cs=tinysrgb&w=1600" />
          <Cards name="Education" imgUrl="https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=300" />
          <Cards name="Natural Disaster" imgUrl="https://images.pexels.com/photos/70573/fireman-firefighter-rubble-9-11-70573.jpeg?auto=compress&cs=tinysrgb&w=300" />
          <Cards name="Covid - 19" imgUrl="https://images.pexels.com/photos/3992933/pexels-photo-3992933.jpeg?auto=compress&cs=tinysrgb&w=300" />
      </Box>
      </Box>
      <Box>
      <Box>
        <h1>Latest Caused of GROOMING ARGENTINA</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown was popularised. It is a long established fact that reader distracted by the the readable content off page looking at its layout point.</p>
      </Box>
      <Box>
        <Cards name="Event Registration" body2="Lorem Ipsum is simply dummy text of the printing and typesetting industry." imgUrl="https://images.pexels.com/photos/939702/pexels-photo-939702.jpeg?auto=compress&cs=tinysrgb&w=300" />
        <Cards name="monthly Donation" body2="Lorem Ipsum is simply dummy text of the printing and typesetting industry." imgUrl="https://images.pexels.com/photos/1212805/pexels-photo-1212805.jpeg?auto=compress&cs=tinysrgb&w=300" />
        <Cards name="Donate Now" body2="Lorem Ipsum is simply dummy text of the printing and typesetting industry." imgUrl="https://images.pexels.com/photos/1815257/pexels-photo-1815257.jpeg?auto=compress&cs=tinysrgb&w=300" />
      </Box>
      <Box>
        <h1>Events</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown was popularised. It is a long established fact that reader distracted by the the readable content off page looking at its layout point.</p>
      </Box>
      </Box>
      <Box>
        <h1>Supported Colleges</h1>
        <Button size='large' variant='contained'>Specialization</Button>
        <Cards />
        <Cards />
        <Cards />
    </Box>
    <Box>
      <h1>Latest News</h1>
    </Box>
    </div>
    </Container>
  )
}

export default LandingPage