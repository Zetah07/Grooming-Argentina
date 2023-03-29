import React from 'react';
import logoGrooming from '../../../assets/Logo_horizontal.png';
import logoInhope from '../../../assets/INHOPE.jpeg';
import style from './Denounces.module.css';

const Denounces = () => {
  return (
    <div>
      <div className={style.logos}>
        <img
          src={logoInhope}
          alt='Logo inHope'
          className={style.logoGrooming}
        />
        <img
          src={logoGrooming}
          alt='Logo grooming Argentina'
          className={style.logoIhope}
        />
      </div>
    </div>
  );
};

export default Denounces;
