import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getLastFillupTimeQuery } from "../../queris/queris";


class LastFillupTimeCard extends Component {
  displayCarData() {
    let data = this.props.data;
    if (data.loading) {
      return (<div>Loading</div>);
    } else {
      return <div>{data.car.latfilluptime}</div>
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

export default graphql(getLastFillupTimeQuery)(LastFillupTimeCard);