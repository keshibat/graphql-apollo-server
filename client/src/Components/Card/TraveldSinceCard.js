import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getTraveldSinceQuery } from "../../queris/queris";


class TraveldSinceCard extends Component {
  displayCarData() {
    let data = this.props.data;
    if (data.loading) {
      return (<div>Loading</div>);
    } else {
      return <div>{data.car.traveldsince}</div>
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

export default graphql(getTraveldSinceQuery)(TraveldSinceCard);