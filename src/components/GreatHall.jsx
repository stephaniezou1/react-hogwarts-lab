import React from 'react';
import Wizard from './Wizard'

const GreatHall = (props) => {

  let arrayOfWizards = props.wizards.map((singleWizard) => {
    return <Wizard 
      wizard={singleWizard}
      key={singleWizard.id}
      graduateAWizard={props.graduateAWizard}
    />
  })

  return (
    <section>
      <h2>Students of Hogwarts</h2>
      <ul className="cards">
        {arrayOfWizards}
      </ul>
    </section>
  )
}

export default GreatHall;
