import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getFuelEconomyQuery } from "../../queris/queris";


class FuelEconomyCard extends Component {
  displayCarData() {
    let data = this.props.data;
    if (data.loading) {
      return (<div>Loading</div>);
    } else {
      return <div>{data.car.fueleconomy}</div>
    }
  }
  render() {
    return (
      <div>
        <ul>
          {this.displayCarData()}
        </ul>
      </div>
    );
  }
}

export default graphql(getFuelEconomyQuery)(FuelEconomyCard);