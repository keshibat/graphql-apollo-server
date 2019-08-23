import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getTimeTraveldQuery } from "../../queris/queris";


class TimeTraveldCard extends Component {
  displayCarData() {
    let data = this.props.data;
    if (data.loading) {
      return (<div>Loading</div>);
    } else {
      return <div>{data.car.timetraveld}</div>
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

export default graphql(getTimeTraveldQuery)(TimeTraveldCard);