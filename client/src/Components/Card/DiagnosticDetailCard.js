import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getDiagnosticDetailQuery } from "../../queris/queris";


class DiagnosticDetailCard extends Component {
  displayCarData() {
    let data = this.props.data;
    if (data.loading) {
      return (<div>Loading</div>);
    } else {
      return <div>{data.car.diagnosticdetail}</div>
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

export default graphql(getDiagnosticDetailQuery)(DiagnosticDetailCard);