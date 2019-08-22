import React, { Component } from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";


const getOwnerQuery = gql`
  {
    owners {
      firstName
      id
    }
  }
`;


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





