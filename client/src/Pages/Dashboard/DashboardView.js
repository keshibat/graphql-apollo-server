import React, { Component } from "react";
import GoogleMap from "../../Components/GoogleMap/GoogleMap"
import AntdTable from "../../Components/AntdTable/AntdTable"

import CarList from "../../Components/CarList"
import LastFillupCard from "../../Components/Card/LastFillupCard"
import CarNameCard from "../../Components/Card/CarNameCard";


class DashboardView extends Component {
  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        {/* <CarList /> */}
        <CarNameCard />
        <LastFillupCard />
        <GoogleMap />
        <AntdTable />
      </div>
    );
  }
}

export default DashboardView;