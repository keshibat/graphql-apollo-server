import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getLastFillupQuery } from "../../queris/queris";
import { Card, Icon, Responsive } from 'semantic-ui-react';



class LastFillupCard extends Component {

  displayCarDataLatFillup() {
    let data = this.props.data;
    if (data.loading) {
      return (<div>Loading</div>);
    } else {
      return <div>{data.car.latfillup}</div>
    }
  }


  render() {
    return (
      <Responsive as={Card}>
        <Card className="data-cards-r1" >
          <Card.Content>
            <Icon name="motorcycle" size="huge" />
            <Card.Header>Last Fill Up:{this.displayCarDataLatFillup()}</Card.Header>
            <Card.Content extra>
              <hr></hr>
              <p></p>
            </Card.Content>
          </Card.Content>
        </Card>
      </Responsive>
    );
  }
}

export default graphql(getLastFillupQuery)(LastFillupCard);