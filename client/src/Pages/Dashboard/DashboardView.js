import React, { Component } from "react";
import GoogleMap from "../../Components/GoogleMap/GoogleMap";
import AntdTableComponent from "../../Components/AntdTable/AntdTableComponent";

import CarList from "../../Components/CarList"
import CarNameCard from "../../Components/Card/CarNameCard";
import LastFillupCard from "../../Components/Card/LastFillupCard";
import LastFillupTimeCard from "../../Components/Card/LastFillupTimeCard";
import FuelLeftCard from "../../Components/Card/FuelLeftCard";
import TraveldSinceCard from "../../Components/Card/TraveldSinceCard";
import DiagnosticCard from "../../Components/Card/DiagnosticCard";
import DiagnosticDetailCard from "../../Components/Card/DiagnosticDetailCard";
import BusinessRatioCard from "../../Components/Card/BusinessRatioCard";
import BusinessTotalCard from "../../Components/Card/BusinessTotalCard";
import AverageSpeedCard from "../../Components/Card/AverageSpeedCard";
import TravelDistanceTotalCard from "../../Components/Card/TravelDistanceTotalCard";
import TravelDistanceThisYearCard from "../../Components/Card/TravelDistanceThisYearCard";
import TimeInCarCard from "../../Components/Card/TimeInCarCard";
import EmissionsCard from "../../Components/Card/EmissionsCard";
import FuelEconomyCard from "../../Components/Card/FuelEconomyCard";
import ParkingCard from "../../Components/Card/ParkingCard";
import TimeTraveldCard from "../../Components/Card/TimeTraveldCard";
import StartLocationCard from "../../Components/Card/StartLocationCard";
import EndLocationCard from "../../Components/Card/EndLocationCard";




class DashboardView extends Component {
  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        {/* <CarList /> */}
        <CarNameCard />
        <LastFillupCard />
        <LastFillupTimeCard />
        <FuelLeftCard />
        <TraveldSinceCard />
        <DiagnosticCard />
        <DiagnosticDetailCard />
        <BusinessRatioCard />
        <BusinessTotalCard />
        <AverageSpeedCard />
        <TravelDistanceTotalCard />
        <TravelDistanceThisYearCard />
        <TimeInCarCard />
        <EmissionsCard />
        <FuelEconomyCard />
        <ParkingCard />
        <TimeTraveldCard />
        <StartLocationCard />
        <EndLocationCard />

        <GoogleMap />

        <h1>Table</h1>
        <AntdTableComponent />

      </div>
    );
  }
}

export default DashboardView;