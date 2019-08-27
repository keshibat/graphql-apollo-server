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
      return <div>{data.car.traveldistancetotal} km</div>
    }
  }
  render() {
    return (
      <Card className="data-cards-r1" >
        <Card.Content>
          <Icon circular inverted color="brown" name="road" size="big" />
          <div className="data-content">
            <p>Total Distance</p>
            <h2>{this.displayCarData()}</h2>

          </div>
          <Card.Content extra>
            <hr></hr>
            <h2><TravelDistanceThisYearCard /></h2>
          </Card.Content>
        </Card.Content>
        <hr></hr>
      </Card>
    );
  }
}

export default graphql(getTravelDistanceTotalQuery)(TravelDistanceTotalCard);