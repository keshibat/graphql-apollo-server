import React from "react"
import { BrowserRouter, Route } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import DashboardView from "./Pages/Dashboard/DashboardView";
import LoginView from "./Pages/Login/LoginView";



//Apollo client setup
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
})



class App extends React.Component {

  render() {
    return (
      <ApolloProvider client={client}>
        <>
          <BrowserRouter>
            <div>
              <Route exact path="/" component={DashboardView} />
              <Route exact path="/login" component={LoginView} />
            </div>
          </BrowserRouter>
        </>
      </ApolloProvider>
    )
  }
}

export default App