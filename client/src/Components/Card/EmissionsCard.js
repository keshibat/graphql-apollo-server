import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getEmissionsQuery } from "../../queris/queris";
import { Card, Icon } from 'semantic-ui-react';


class EmissionsCard extends Component {
  displayCarData() {
    let data = this.props.data;
    if (data.loading) {
      return (<div>Loading</div>);
    } else {
      return <div>{data.car.emissions}KG CO2</div>
    }
  }
  render() {
    return (
      <Card className="data-cards-r1" >
        <Card.Content>
          <Icon float="left" circular inverted color="green" name="tree" size="big" />
          <div className="data-content">
            <p>EMISSIONS</p>
            <h2>{this.displayCarData()}</h2>
          </div>
          <Card.Content extra>
            <hr></hr>
          </Card.Content>
        </Card.Content>
      </Card>
    );
  }
}

export default graphql(getEmissionsQuery)(EmissionsCard);