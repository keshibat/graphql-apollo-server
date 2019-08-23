import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getDiagnosticQuery } from "../../queris/queris";


class DiagnosticCard extends Component {
  displayCarData() {
    let data = this.props.data;
    if (data.loading) {
      return (<div>Loading</div>);
    } else {
      return <div>{data.car.diagnostic}</div>
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

export default graphql(getDiagnosticQuery)(DiagnosticCard);