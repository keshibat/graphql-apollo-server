import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getLastFillupQuery } from "../../queris/queris";
import { Card,Icon, Responsive } from 'semantic-ui-react';

import LastFillupTimeCard from "./LastFillupTimeCard";
import EndLocationCard from "./EndLocationCard"



class LastFillupCard extends Component {

  displayCarData() {
    let data = this.props.data;
    if (data.loading) {
      return (<div>Loading</div>);
    } else {
      return <div>{data.car.latfillup} L</div>
    }
  }

  render() {
    return (

        <Card className="data-cards-r1" >
          <Card.Content>
            <Icon float="left" circular inverted color="teal" name="battery high" size="big" />
            <div className="data-content">
              <p>Last Fill Up:</p>
            <h2>{this.displayCarData()}</h2>
            </div>
            <Card.Content extra>
              <hr></hr>
              <p><LastFillupTimeCard /></p>
              <p><EndLocationCard /></p>
            </Card.Content>
          </Card.Content>
        </Card>

    );
  }
}

export default graphql(getLastFillupQuery)(LastFillupCard);