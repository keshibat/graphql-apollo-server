import React, { Component } from "react";
import GoogleMap from "../../Components/GoogleMap/GoogleMap";
import AntdTable from "../../Components/AntdTable/AntdTable";

import CarList from "../../Components/CarList"
import CarNameCard from "../../Components/Card/CarNameCard";
import LastFillupCard from "../../Components/Card/LastFillupCard";
import LastFillupTimeCard from "../../Components/Card/LastFillupTimeCard";
import FuelLeftCard from "../../Components/Card/FuelLeftCard";



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

        <GoogleMap />
        <AntdTable />

      </div>
    );
  }
}

export default DashboardView;