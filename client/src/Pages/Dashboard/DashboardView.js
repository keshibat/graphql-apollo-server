import React, { Component } from "react";
import GoogleMap from "../../Components/GoogleMap/GoogleMap";
import AntdTableComponent from "../../Components/AntdTable/AntdTableComponent";
import { Card } from 'semantic-ui-react';
// import CarList from "../../Components/CarList"
import CarNameCard from "../../Components/Card/CarNameCard";
import LastFillupCard from "../../Components/Card/LastFillupCard";
// import LastFillupTimeCard from "../../Components/Card/LastFillupTimeCard";
import FuelLeftCard from "../../Components/Card/FuelLeftCard";
// import TraveldSinceCard from "../../Components/Card/TraveldSinceCard";
import DiagnosticCard from "../../Components/Card/DiagnosticCard";
// import DiagnosticDetailCard from "../../Components/Card/DiagnosticDetailCard";
import BusinessRatioCard from "../../Components/Card/BusinessRatioCard";
// import BusinessTotalCard from "../../Components/Card/BusinessTotalCard";
import AverageSpeedCard from "../../Components/Card/AverageSpeedCard";
import TravelDistanceTotalCard from "../../Components/Card/TravelDistanceTotalCard";
// import TravelDistanceThisYearCard from "../../Components/Card/TravelDistanceThisYearCard";
import TimeInCarCard from "../../Components/Card/TimeInCarCard";
import EmissionsCard from "../../Components/Card/EmissionsCard";
import FuelEconomyCard from "../../Components/Card/FuelEconomyCard";
// import ParkingCard from "../../Components/Card/ParkingCard";
// import TimeTraveldCard from "../../Components/Card/TimeTraveldCard";
// import StartLocationCard from "../../Components/Card/StartLocationCard";
// import EndLocationCard from "../../Components/Card/EndLocationCard";




class DashboardView extends Component {
  render() {
    return (
      <>
        <div className="ui container">
        <h1><CarNameCard /></h1>
        </div>
        <div className="ui container">
          <Card.Group>
            <LastFillupCard />
            <FuelLeftCard />
            <DiagnosticCard />
            <BusinessRatioCard />
          </Card.Group>
        </div>
        <div className="ui container">
          <GoogleMap />
        </div>
        <div className="ui container">
          <Card.Group>
            <AverageSpeedCard />
            <TravelDistanceTotalCard />
            <TimeInCarCard />
          </Card.Group>
        </div>
        <div className="ui container">
          <Card.Group>
            <EmissionsCard />
            <FuelEconomyCard />
          </Card.Group>
        </div>
        <div className="ui container">
          <AntdTableComponent />
        </div>
      </>
    );
  }
}

export default DashboardView;