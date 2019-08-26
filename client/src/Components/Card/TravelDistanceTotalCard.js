import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getTravelDistanceTotalQuery } from "../../queris/queris";
import { Card, Icon, Responsive } from 'semantic-ui-react';


import TravelDistanceThisYearCard from "./TravelDistanceThisYearCard";


class TravelDistanceTotalCard extends Component {
  displayCarData() {
    let data = this.props.data;
    if (data.loading) {
      return (<div>Loading</div>);
    } else {
      return <div>{data.car.traveldistancetotal}</div>
    }
  }
  render() {
    return (
      <Responsive as={Card}>
        <Card className="data-cards-r1" >
          <Card.Content>
            <Icon name="motorcycle" size="huge" />
            <Card.Header>Total Distance: {this.displayCarData()}</Card.Header>
            <Card.Header><TravelDistanceThisYearCard/></Card.Header>
            <Card.Content extra>
              <hr></hr>
              <p>{this.displayCarData()}</p>
              <p><TravelDistanceThisYearCard /></p>
            </Card.Content>
          </Card.Content>
        </Card>
      </Responsive>
    );
  }
}

export default graphql(getTravelDistanceTotalQuery)(TravelDistanceTotalCard);