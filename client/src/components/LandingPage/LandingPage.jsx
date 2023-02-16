import React from 'react'
import styles from './LandingPage.module.css';
import { Button, Container} from '@mui/material';

const LandingPage = () => {
  return (
    <Container>
      <div className={styles.background}>
      <div className={styles.information}>
        <h1>Your support can help us a lot</h1>
        <h2>This help is focussed towards the poor and the needy who live among us within our society and endeavours to bring about a change in their life - a "GROOMING ARGENTINA".</h2>
        <Button className='btn' size='large' variant='contained'>Donate now</Button>
      </div>
    </div>
    </Container>
  )
}
export default LandingPage