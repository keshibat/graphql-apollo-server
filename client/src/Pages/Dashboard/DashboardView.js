import React, { Component } from "react";
import { Link } from "react-router-dom";
import LastFillup from "../../Components/Card/LastFillupCard"
import GoogleMap from "../../Components/GoogleMap/GoogleMap"
import AntdTable from "../../Components/AntdTable/AntdTable"


class DashboardView extends Component {
  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <LastFillup />
        <GoogleMap />
        <AntdTable />
      </div>
    );
  }
}

export default DashboardView;




