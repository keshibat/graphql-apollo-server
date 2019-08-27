import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getBusinessRatioQuery } from "../../queris/queris";
import { Card, Icon, Responsive } from "semantic-ui-react";

import BusinessTotalCard from "./BusinessTotalCard";


class BusinessRatioCard extends Component {
  displayCarData() {
    let data = this.props.data;
    if (data.loading) {
      return (<div>Loading</div>);
    } else {
      return <div>{data.car.businessratio} %</div>
    }
  }
  render() {
    return (
      <Card className="data-cards-r1" >
        <Card.Content>
          <Icon circular inverted color="blue" name="handshake" size="big" />
          <div className="data-content">
            <p>Business Travel</p>
            <h2>{this.displayCarData()}</h2>

          </div>
          <Card.Content extra>
            <hr></hr>
            <h3><BusinessTotalCard /></h3>
          </Card.Content>
        </Card.Content>
        <hr></hr>
      </Card>

    );
  }
}

export default graphql(getBusinessRatioQuery)(BusinessRatioCard);