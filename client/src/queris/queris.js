import { gql } from "apollo-boost";

const getCarsQuery = gql`
  {
    cars {
      carName
      id
    }
  }
`;


const getOwnersQuery = gql`
  {
    owners {
      firstName
      id
    }
  }
`;

const getCarNameQuery = gql`
  {
    car(id: "5d5dd3aa55642b15a9d08d07") {
      carName
    }
  }
`;


const getLastFillupQuery = gql`
  {
    car(id: "5d5dd3aa55642b15a9d08d07") {
      latfillup
    }
  }
`;

const getLastFillupTimeQuery = gql`
  {
    car(id: "5d5dd3aa55642b15a9d08d07") {
      latfilluptime
    }
  }
`;

const getFuelLeftQuery = gql`
  {
    car(id: "5d5dd3aa55642b15a9d08d07") {
      fuelleft
    }
  }
`;

const getTraveldSinceQuery = gql`
  {
    car(id: "5d5dd3aa55642b15a9d08d07") {
      traveldsince
    }
  }
`;

const getDiagnosticQuery = gql`
  {
    car(id: "5d5dd3aa55642b15a9d08d07") {
      diagnostic
    }
  }
`;

const getDiagnosticDetailQuery = gql`
  {
    car(id: "5d5dd3aa55642b15a9d08d07") {
      diagnosticdetail
    }
  }
`;


const getBusinessRatioQuery = gql`
  {
    car(id: "5d5dd3aa55642b15a9d08d07") {
      businessratio
    }
  }
`;

const getBusinessTotalQuery = gql`
  {
    car(id: "5d5dd3aa55642b15a9d08d07") {
      businesstotal
    }
  }
`;

const getAverageSpeedQuery = gql`
  {
    car(id: "5d5dd3aa55642b15a9d08d07") {
      averagespeed
    }
  }
`;

const getTravelDistanceTotalQuery = gql`
  {
    car(id: "5d5dd3aa55642b15a9d08d07") {
      traveldistancetotal
    }
  }
`;


const getTravelDistanceThisYearQuery = gql`
  {
    car(id: "5d5dd3aa55642b15a9d08d07") {
      traveldistancethisyear
    }
  }
`;








const AddCarMutation = gql`
 mutation($carName: String!, $latfillup: Number!, $latfilluptime: String!, $fuelleft: Number!, $traveldsince: Number!, $diagnostic: String!, $diagnosticdetail: String!, $businessratio: Number!, $businesstotal: Number!, $averagespeed: Number!, $traveldistancetotal: Number!, $traveldistancethisyear: Number!, $timeincar: Number!, $emissions: Number!, $fueleconomy: Number!, $parking: String!, $timetraveld: Number!, $startlocation: String!, $endlocation: String!, $ownerId: ID!){
   addCar(carName: $carName, latfillup: $latfillup, latfilluptime: $latfilluptime, fuelleft: $fuelleft, traveldsince: $traveldistancethisyear, diagnostic: $diagnostic, diagnosticdetail: $diagnosticdetail, businessratio: $businessratio, businesstotal: $businesstotal, averagespeed: $averagespeed, traveldistancetotal: $traveldistancetotal, traveldistancethisyear: $traveldistancethisyear, timeincar: $timeincar, emissions: $emissions, fueleconomy: $fueleconomy, parking: $parking, timetraveld: $timetraveld, startlocation: $startlocation, endlocation: $endlocation, ownerId: $ownerId){
     carName
     latfillup
     latfilluptime
     fuelleft
     traveldsince
     diagnostic
     diagnosticdetail
     businessratio
     businesstotal
     averagespeed
     traveldistancetotal
     traveldistancethisyear
     timeincar
     emissions
     fueleconomy
     parking
     timetraveld
     startlocation
     endlocation
   }
 }
`;


export {
  getCarsQuery,
  getOwnersQuery,
  AddCarMutation,
  getCarNameQuery,
  getLastFillupQuery,
  getLastFillupTimeQuery,
  getFuelLeftQuery,
  getTraveldSinceQuery,
  getDiagnosticQuery,
  getDiagnosticDetailQuery,
  getBusinessRatioQuery,
  getBusinessTotalQuery,
  getAverageSpeedQuery,
  getTravelDistanceTotalQuery,
  getTravelDistanceThisYearQuery
};


