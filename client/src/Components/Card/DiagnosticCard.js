import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getDiagnosticQuery } from "../../queris/queris";
import { Card, Icon, Responsive } from "semantic-ui-react";

import DiagnosticDetailCard from "./DiagnosticDetailCard";


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
      <Card className="data-cards-r1" >
        <Card.Content>
          <Icon circular inverted color="red" name="wrench" size="big" />
          <div className="data-content">
            <p>Diagnostic Issues    </p>
            <h2>{this.displayCarData()}</h2>
          </div>
          <Card.Content extra>
            <hr></hr>
            <p><DiagnosticDetailCard /></p>
          </Card.Content>
        </Card.Content>
      </Card>
    );
  }
}

export default graphql(getDiagnosticQuery)(DiagnosticCard);