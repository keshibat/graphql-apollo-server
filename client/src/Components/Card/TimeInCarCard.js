import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getTimeInCarQuery } from "../../queris/queris";
import { Card, Icon, Responsive } from 'semantic-ui-react';


class TimeInCarCard extends Component {
  displayCarData() {
    let data = this.props.data;
    if (data.loading) {
      return (<div>Loading</div>);
    } else {
      return <div>{data.car.timeincar} hours</div>
    }
  }
  render() {
    return (
      <Card className="data-cards-r1" >
        <Card.Content>
          <Icon float="left" circular inverted color="grey" name="car" size="big" />
          <div className="data-content">
            <p>Time in Car (this year)</p>
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

export default graphql(getTimeInCarQuery)(TimeInCarCard);