import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getLastFillupQuery } from "../../queris/queris";


class LastFillupCard extends Component {
  displayCarData() {
    let data = this.props.data;
    if (data.loading) {
      return (<div>Loading</div>);
    } else {
      return <div>{data.car.latfillup}</div>
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

export default graphql(getLastFillupQuery)(LastFillupCard);