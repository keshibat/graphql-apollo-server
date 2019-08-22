import React, { Component } from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";


const getCarsQuery = gql`
  {
    cars {
      carName
      id
    }
  }
`;



class CarList extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <ul>
          <li>Car Name </li>
        </ul>

      </div>
    );
  }
}

export default graphql(getCarsQuery)(CarList);




