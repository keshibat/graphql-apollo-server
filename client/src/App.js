import React from "react"
import { BrowserRouter, Route } from "react-router-dom";
import DashboardView from "./Pages/Dashboard/DashboardView";
import LoginView from "./Pages/Login/LoginView";


class App extends React.Component {

  render() {
    return (
      <>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={DashboardView} />
            <Route exact path="/login" component={LoginView} />
          </div>
        </BrowserRouter>
      </>
    )
  }
}

export default App