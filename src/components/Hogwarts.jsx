import React, { Component } from 'react';
import GreatHall from './GreatHall'
import SortingHat from './SortingHat'
import MaraudersMap from './MaraudersMap'

class Hogwarts extends Component {

  render() {
    // console.log(this.props.wizards, "HELLO")
    return (
      <main>
        <MaraudersMap 
        houseFilterTerm={this.props.houseFilterTerm}
        handleHouseFilterTerm={this.props.handleHouseFilterTerm}/>
        <GreatHall 
        wizards={this.props.wizards}
        graduateAWizard={this.props.graduateAWizard}/>
        <SortingHat 
        enrollNewWizard={this.props.enrollNewWizard}/>
      </main>
    )
  }

}

export default Hogwarts;
