import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getDiagnosticQuery } from "../../queris/queris";
import { Card, Icon, Responsive } from 'semantic-ui-react';


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
      <Responsive as={Card}>
        <Card className="data-cards-r1" >
          <Card.Content>
            <Icon name="motorcycle" size="huge" />
            <Card.Header>Diagnostic issues: {this.displayCarData()}</Card.Header>
            <Card.Content extra>
              <hr></hr>
              <p>see a mechanic</p>
            </Card.Content>
          </Card.Content>
        </Card>
      </Responsive>
    );
  }
}

export default graphql(getDiagnosticQuery)(DiagnosticCard);