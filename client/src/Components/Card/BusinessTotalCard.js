import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getBusinessTotalQuery } from "../../queris/queris";


class BusinessTotalCard extends Component {
  displayCarData() {
    let data = this.props.data;
    if (data.loading) {
      return (<div>Loading</div>);
    } else {
      return <div>{data.car.businesstotal} km (Total)</div>
    }
  }
  render() {
    return (
      <div>
          {this.displayCarData()}
      </div>
    );
  }
}

export default graphql(getBusinessTotalQuery)(BusinessTotalCard);