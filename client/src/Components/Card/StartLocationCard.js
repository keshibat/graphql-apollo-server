import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getStartLocationQuery } from "../../queris/queris";


class StartLocationCard extends Component {
  displayCarData() {
    let data = this.props.data;
    if (data.loading) {
      return (<div>Loading</div>);
    } else {
      return <div>{data.car.startlocation}</div>
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

export default graphql(getStartLocationQuery)(StartLocationCard);