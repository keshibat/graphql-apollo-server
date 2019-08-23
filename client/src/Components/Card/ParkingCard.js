import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getParkingQuery } from "../../queris/queris";


class ParkingCard extends Component {
  displayCarData() {
    let data = this.props.data;
    if (data.loading) {
      return (<div>Loading</div>);
    } else {
      return <div>{data.car.parking}</div>
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

export default graphql(getParkingQuery)(ParkingCard);