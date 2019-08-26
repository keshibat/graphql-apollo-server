import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getBusinessRatioQuery } from "../../queris/queris";
import { Card, Icon, Responsive } from 'semantic-ui-react';


class BusinessRatioCard extends Component {
  displayCarData() {
    let data = this.props.data;
    if (data.loading) {
      return (<div>Loading</div>);
    } else {
      return <div>{data.car.businessratio}</div>
    }
  }
  render() {
    return (
      <Responsive as={Card}>
        <Card className="data-cards-r1" >
          <Card.Content>
            <Icon name="motorcycle" size="huge" />
            <Card.Header>Business Travel: {this.displayCarData()}</Card.Header>
            <Card.Content extra>
              <hr></hr>
            </Card.Content>
          </Card.Content>
        </Card>
      </Responsive>
    );
  }
}

export default graphql(getBusinessRatioQuery)(BusinessRatioCard);