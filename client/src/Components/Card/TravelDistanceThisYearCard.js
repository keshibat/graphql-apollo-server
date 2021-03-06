import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getTravelDistanceThisYearQuery } from "../../queris/queris";


class TravelDistanceThisYearCard extends Component {
  displayCarData() {
    let data = this.props.data;
    if (data.loading) {
      return (<div>Loading</div>);
    } else {
      return <div>{data.car.traveldistancethisyear}</div>
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

export default graphql(getTravelDistanceThisYearQuery)(TravelDistanceThisYearCard);