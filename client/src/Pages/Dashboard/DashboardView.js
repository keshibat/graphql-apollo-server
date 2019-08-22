import React, { Component } from "react";
import { Link } from "react-router-dom";
import LastFillup from "../../Components/Card/LastFillupCard"
import GoogleMap from "../../Components/GoogleMap/GoogleMap"
import AntdTable from "../../Components/AntdTable/AntdTable"

import CarList from "../../Components/CarList"
import AddCar from "../../Components/AddCar"


class DashboardView extends Component {
  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <CarList />
        <AddCar />
        <LastFillup />
        <GoogleMap />
        <AntdTable />
      </div>
    );
  }
}

export default DashboardView;




