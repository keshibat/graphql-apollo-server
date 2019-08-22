import React, { Component } from "react";
import LastFillup from "../../Components/Card/LastFillupCard"
import GoogleMap from "../../Components/GoogleMap/GoogleMap"
import AntdTable from "../../Components/AntdTable/AntdTable"

import CarList from "../../Components/CarList"



class DashboardView extends Component {
  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <CarList />
        <LastFillup />
        <GoogleMap />
        <AntdTable />
      </div>
    );
  }
}

export default DashboardView;




