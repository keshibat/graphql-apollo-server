import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getCarNameQuery } from "../../queris/queris";


class CarNameCard extends Component {
  displayCarData() {
    let data = this.props.data;
    if (data.loading) {
      return (<div>Loading</div>);
    } else {
      return <div>{data.car.carName}</div>
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

export default graphql(getCarNameQuery)(CarNameCard);