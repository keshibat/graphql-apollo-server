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
      return <div>{data.car.fuelleft} km</div>
    }
  }
  render() {
    return (

      <Card className="data-cards-r1" >
        <Card.Content>
          <Icon circular inverted color="orange" name="tachometer alternate" size="big" />
          <div className="data-content">
            <p>Esitmated Fuel Left:</p>
            <h2>{this.displayCarData()}</h2>
          </div>
          <Card.Content extra>
            <hr></hr>
            <p><TraveldSinceCard /></p>
          </Card.Content>
        </Card.Content>
      </Card>


    );
  }
}

export default graphql(getFuelLeftQuery)(FuelLeftCard);