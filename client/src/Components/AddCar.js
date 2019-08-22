import React, { Component } from "react";
import { graphql } from "react-apollo";
import flowright from "lodash.flowright";
import { getOwnersQuery, AddCarMutation } from "../queris/queris";
// import { bind } from "@wry/context";


class AddCar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carName: '',
      latfillup: 0,
      latfilluptime: '',
      lastfilluplocation: '',
      fuelleft: 0,
      traveldsince: 0,
      diagnostic: '',
      diagnosticdetail: '',
      businessratio: 0,
      businesstotal: 0,
      averagespeed: 0,
      traveldistancetotal: 0,
      traveldistancethisyear: 0,
      timeincar: 0,
      emissions: 0,
      fueleconomy: 0,
      parking: '',
      startlocation: '',
      endlocation: '',
      ownerId: ''
    };
  }

  displayAuthor(){
    let data = this.props.getOwnersQuery;
    if(data.loading){
      return( <option disabled>Loading Owners</option>);
    } else {
      return data.owners.map( owner => {
        return (<option key={owner.id} value={owner.id}>{owner.firstName} </option>);
      })
    }
  }

  submitForm(e){
    e.preventDefault();
    this.props.AddCarMutation({
      variables: {
        carName: this.state.carName,
        latfillup: this.state.latfillup,
        latfilluptime: this.state.latfilluptime,
        lastfilluplocation: this.state.lastfilluplocation,
        fuelleft: this.state.fuelleft,
        traveldsince: this.state.traveldsince,
        diagnostic: this.state.diagnostic,
        diagnosticdetail: this.state.diagnosticdetail,
        businessratio: this.state.businessratio,
        businesstotal: this.state.businesstotal,
        averagespeed: this.state.averagespeed,
        traveldistancetotal: this.state.traveldistancetotal,
        traveldistancethisyear: this.state.traveldistancethisyear,
        timeincar: this.state.timeincar,
        emissions: this.state.emissions,
        fueleconomy: this.state.fueleconomy,
        parking: this.state.parking,
        startlocation: this.state.startlocation,
        endlocation: this.state.endlocation,
        ownerId: this.state.ownerId
      }
    });

  }


  render() {
    return (
      <form id="add-car" onSubmit={this.submitForm.bind(this)}>
        <div className="field">
          <label>carName:</label>
          <input type="text" onChange={(e) => this.setState({ carName: e.target.value})}/>
        </div>
        <div className="field">
          <label>latfillup:</label>
          <input type="number" onChange={(e) => this.setState({ latfillup: e.target.value })}/>
        </div>
        <div className="field">
          <label>latfilluptime:</label>
          <input type="text" onChange={(e) => this.setState({ latfilluptime: e.target.value })}/>
        </div>
        <div className="field">
          <label>lastfilluplocation:</label>
          <input type="text" onChange={(e) => this.setState({ lastfilluplocation: e.target.value })} />
        </div>
        <div className="field">
          <label>fuelleft:</label>
          <input type="number" onChange={(e) => this.setState({ fuelleft: e.target.value })}/>
        </div>
        <div className="field">
          <label>traveldsince:</label>
          <input type="number" onChange={(e) => this.setState({ traveldsince: e.target.value })}/>
        </div>
        <div className="field">
          <label>diagnostic:</label>
          <input type="text" onChange={(e) => this.setState({ diagnostic: e.target.value })}/>
        </div>
        <div className="field">
          <label>diagnosticdetail:</label>
          <input type="text" onChange={(e) => this.setState({ diagnosticdetail: e.target.value })}/>
        </div>
        <div className="field">
          <label>businessratio:</label>
          <input type="number" onChange={(e) => this.setState({ businessratio: e.target.value })}/>
        </div>
        <div className="field">
          <label>businesstotal:</label>
          <input type="number" onChange={(e) => this.setState({ businesstotal: e.target.value })}/>
        </div>
        <div className="field">
          <label>averagespeed:</label>
          <input type="number" onChange={(e) => this.setState({ averagespeed: e.target.value })}/>
        </div>
        <div className="field">
          <label>traveldistancetotal:</label>
          <input type="number" onChange={(e) => this.setState({ traveldistancetotal: e.target.value })}/>
        </div>
        <div className="field">
          <label>traveldistancethisyear:</label>
          <input type="number" onChange={(e) => this.setState({ traveldistancethisyear: e.target.value })}/>
        </div>
        <div className="field">
          <label>timeincar:</label>
          <input type="number" onChange={(e) => this.setState({ timeincar: e.target.value })}/>
        </div>
        <div className="field">
          <label>emissions:</label>
          <input type="number" onChange={(e) => this.setState({ emissions: e.target.value })}/>
        </div>
        <div className="field">
          <label>fueleconomy:</label>
          <input type="number" onChange={(e) => this.setState({ fueleconomy: e.target.value })}/>
        </div>
        <div className="field">
          <label>parking:</label>
          <input type="text" onChange={(e) => this.setState({ parking: e.target.value })}/>
        </div>
        <div className="field">
          <label>timetraveld:</label>
          <input type="text" onChange={(e) => this.setState({ startlocation: e.target.value })}/>
        </div>
        <div className="field">
          <label>startlocation:</label>
          <input type="text" onChange={(e) => this.setState({ endlocation: e.target.value })}/>
        </div>
        <div className="field">
          <label>endlocation:</label>
          <input type="text" onChange={(e) => this.setState({ ownerId: e.target.value })}/>
        </div>
        <div className="field">
          <label>Owner:</label>
          <select>
            <option>Select Owner</option>
            {this.displayAuthor()}
          </select>
        </div>
        <button>+</button>
      </form>
    );
  }
}

export default flowright(
  graphql(getOwnersQuery, { name: "getOwnersQuery" }),
  graphql(AddCarMutation, { name: "AddCarMutation" })
)(AddCar);




