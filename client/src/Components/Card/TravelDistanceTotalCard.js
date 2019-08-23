import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getTravelDistanceTotalQuery } from "../../queris/queris";


class TravelDistanceTotalCard extends Component {
  displayCarData() {
    let data = this.props.data;
    if (data.loading) {
      return (<div>Loading</div>);
    } else {
      return <div>{data.car.traveldistancetotal}</div>
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

export default graphql(getTravelDistanceTotalQuery)(TravelDistanceTotalCard);