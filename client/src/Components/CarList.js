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
  displayCars() {
    let data = this.props.data;
    if (data.loading) {
      return (<div>Loading</div>);
    } else {
      return data.cars.map(car => {
        return (
          <li key={car.id}>{car.carName}</li>
        )
      })
    }
  }
  render() {
    return (
      <div>
        <ul>
          {this.displayCars()}
        </ul>
      </div>
    );
  }
}

export default graphql(getCarsQuery)(CarList);




