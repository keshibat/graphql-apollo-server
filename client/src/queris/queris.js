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
 mutation {
   addCar(carName: "", latfillup: 0, latfilluptime: "", fuelleft: 0, traveldsince: 0, diagnostic: "", diagnosticdetail: "", businessratio: 0, businesstotal: 0, averagespeed: 0, traveldistancetotal: 0, traveldistancethisyear: 0, timeincar: 0, emissions: 0, fueleconomy: 0, parking: "", timetraveld: "", startlocation: "", endlocation: "", ownerId: ""){
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

