import React, { Component } from 'react';

class Wizard extends Component {

  state = {
    showImageTwo: true
  }

  handleImageToggle = (evt) => {
    this.setState((prevState) => {
      return{
        showImageTwo: !prevState.showImageTwo
      }
    })
  }
  
  handleDelete = (evt) => {
    this.props.graduateAWizard(this.props.wizard.id)
  }
  

  render() {
    // console.log(this.props)
    let {name, wand, house, image1, image2} = this.props.wizard
    return (
        <li className={`card ${house}`}>
          <div className="decorative">
            <div className="top">
              <div className="name">
                <h3>{name}</h3>
              </div>
              <div className="border">
                {
                  this.state.showImageTwo
                  ?
                    <div>
                      <img src={image2} alt={name} onClick={this.handleImageToggle}/>
                    </div>
                  :
                    <div>
                      <img src={image1} alt={name} onClick={this.handleImageToggle}/>
                    </div>
                }
              </div>
            </div>
            <div className="card_bottom">
              <p className="house_name">{house}</p>
              <p className="description">Wand: {wand}</p>
              <button onClick={this.handleDelete}>
                Graduate
              </button>
            </div>
          </div>
        </li>

    );
  }

}

export default Wizard;
