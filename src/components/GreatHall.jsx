import React from 'react';
import Wizard from './Wizard'

const GreatHall = () => {
  return (
    <section>
      <h2>Students of Hogwarts</h2>
      <ul className="cards">
        <Wizard/>
        <Wizard/>
        <Wizard/>
      </ul>
    </section>
  )
}

export default GreatHall;
