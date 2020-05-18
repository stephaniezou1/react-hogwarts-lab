import React, { Component } from 'react';

class Wizard extends Component {

  render() {
    return (
        <li className={`card ${"HOUSE HERE"}`}>
          <div className="decorative">
            <div className="top">
              <div className="name">
                <h3>{"NAME HERE"}</h3>
              </div>
              <div className="border">
                <img src={"IMAGE HERE"} alt={"NAME HERE"}/>
              </div>
            </div>
            <div className="card_bottom">
              <p className="house_name">{"HOUSE HERE"}</p>
              <p className="description">Wand: {"WAND HERE"}</p>
              <button>
                Graduate
              </button>
            </div>
          </div>
        </li>

    );
  }

}

export default Wizard;
