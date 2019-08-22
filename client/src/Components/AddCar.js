import React, { Component } from "react";
import { graphql } from "react-apollo";

import { getOwnerQuery } from "../queris/queris";



class AddCar extends Component {
  displayAuthor(){
    let data = this.props.data;
    if(data.loading){
      return( <option disabled>Loading Owners</option>);
    } else {
      return data.owners.map( owner => {
        return (<option key={owner.id} value={owner.id}>{owner.firstName} </option>);
      })
    }
  }


  render() {
    return (
      <form id="add-car">
        <div className="field">
          <label>Car name:</label>
          <input type="text" />
        </div>
        <div className="field">
          <label>Fuel Left:</label>
          <input type="text" />
        </div>
        <div className="field">
          <label>Average:</label>
          <select>
            <option>Select Owner</option>
            {this.displayAuthor()}
          </select>
        </div>
        <button>+</button>
      </form>
    );
  }
}

export default graphql(getOwnerQuery)(AddCar);





