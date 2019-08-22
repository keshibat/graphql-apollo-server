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
  AddCarMutation
};


