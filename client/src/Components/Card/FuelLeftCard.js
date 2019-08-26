import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getFuelLeftQuery } from "../../queris/queris";
import { Card, Icon, Responsive } from "semantic-ui-react";

import TraveldSinceCard from "./TraveldSinceCard";


class FuelLeftCard extends Component {
  displayCarData() {
    let data = this.props.data;
    if (data.loading) {
      return (<div>Loading</div>);
    } else {
      return <div>{data.car.fuelleft}</div>
    }
  }
  render() {
    return (
      <Responsive as={Card}>
        <Card className="data-cards-r1" >
          <Card.Content>
            <Icon name="motorcycle" size="huge" />
            <Card.Header>Estimated fuel left: {this.displayCarData()}</Card.Header>
            <Card.Content extra>
              <hr></hr>
              <p><TraveldSinceCard/>km tripped(since last fill up)</p>
            </Card.Content>
          </Card.Content>
        </Card>
      </Responsive>
    );
  }
}

export default graphql(getFuelLeftQuery)(FuelLeftCard);