const graphql = require("graphql");
const Car = require("../models/car");
const Owner = require("../models/owner");
const _ = require('lodash');


const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLID,
  GraphQLList
} = graphql;


//dummy data
// const cars = [
//   { id: "1", carName: "BMW", averagespeed: 30, traveldsince: 10000,  ownerId: "23"},
//   { id: "2", carName: "TOYOTA", averagespeed: 50, traveldsince: 10000, ownerId: "40"},
//   { id: "3", carName: "SUZUKI", averagespeed: 40, traveldsince: 10000, ownerId: "51"},
//   { id: "4", carName: "VW", averagespeed: 40, traveldsince: 10000, ownerId: "51" },
//   { id: "5", carName: "HONDA", averagespeed: 60, traveldsince: 10000, ownerId: "23" }
// ]

// const owners = [
//   { firstName: "Sam", id: "23" },
//   { firstName: "Buce", id: "40" },
//   { firstName: "Billy", id: "51" }
// ]


const CarType = new GraphQLObjectType ({
  name: "Car",
  fields: () => ({
    id: { type: GraphQLID },
    carName: { type: GraphQLString },
    latfillup: { type: GraphQLInt },
    latfilluptime: { type: GraphQLString },
    lastfilluplocation: { type: GraphQLString },
    fuelleft: { type: GraphQLInt },
    traveldsince: { type: GraphQLInt },
    diagnostic: { type: GraphQLString },
    diagnosticdetail: { type: GraphQLString },
    businessratio: { type: GraphQLInt },
    businesstotal: { type: GraphQLInt },
    averagespeed: { type: GraphQLInt },
    traveldistancetotal: { type: GraphQLInt },
    traveldistancethisyear: { type: GraphQLInt },
    timeincar: { type: GraphQLInt },
    emissions: { type: GraphQLInt },
    fueleconomy: { type: GraphQLInt },
    parking: { type: GraphQLString },
    timetraveld: { type: GraphQLString },
    startlocation: { type: GraphQLString },
    endlocation: { type: GraphQLString },
    owner: {
      type: OwnerType,
      resolve(parent, args){
        // console.log(parent);
        // return _.find(owners, { id: parent.ownerId });
      }
    }
  })
});


const OwnerType = new GraphQLObjectType({
  name: "Owner",
  fields: () => ({
    id: { type: GraphQLID },
    firstName: { type: GraphQLString },
    cars: {
      type: new GraphQLList(CarType),
      resolve(parent, args){

      }
    }
  })
});


const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    car: {
      type: CarType,
      args: { id: { type: GraphQLID}},
      resolve(parent, args) {
        //code to get data from db /other source
        // return _.find(cars, {id: args.id});
      }
    },
    owner: {
      type: OwnerType,
    args: { id: { type: GraphQLID}},
    resolve(parent, args){
      // return _.find(owners, {id: args.id});
    }
    },
    cars: {
      type: new GraphQLList(CarType),
      resolve(parent, args){
        // return cars;
      }
    },
    owners: {
      type: new GraphQLList(OwnerType),
      resolve(parent, args){
        // return owners;
      }
    }
  }
})



const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addOwner: {
      type: OwnerType,
      args: {
        firstName: { type: GraphQLString}
      },
      resolve(parent, args) {
        let owner = new Owner({
          firstName: args.firstName
        });
        return owner.save();
      }
    },
    addCar: {
      type: CarType,
      args: {
        carName: { type: GraphQLString },
        latfillup: { type: GraphQLInt },
        latfilluptime: { type: GraphQLString },
        // lastfilluplocation: { type: GraphQLString },
        fuelleft: { type: GraphQLInt },
        traveldsince: { type: GraphQLInt },
        diagnostic: { type: GraphQLString },
        diagnosticdetail: { type: GraphQLString },
        businessratio: { type: GraphQLInt },
        businesstotal: { type: GraphQLInt },
        averagespeed: { type: GraphQLInt },
        traveldistancetotal: { type: GraphQLInt },
        traveldistancethisyear: { type: GraphQLInt },
        timeincar: { type: GraphQLInt },
        emissions: { type: GraphQLInt },
        fueleconomy: { type: GraphQLInt },
        parking: { type: GraphQLString },
        timetraveld: { type: GraphQLString },
        startlocation: { type: GraphQLString },
        endlocation: { type: GraphQLString },
        ownerId: { type: GraphQLID }
      },
      resolve(parent, args){
        let car = new Car({
          carName: args.carName,
          latfillup: args.latfillup,
          latfilluptime: args.latfilluptime,
          // lastfilluplocation: args.lastfilluplocation,
          fuelleft: args.fuelleft,
          traveldsince: args.traveldsince,
          diagnostic: args.diagnostic,
          diagnosticdetail: args.diagnosticdetail,
          businessratio: args.businessratio,
          businesstotal: args.businesstotal,
          averagespeed: args.averagespeed,
          traveldistancetotal: args.traveldistancetotal,
          traveldistancethisyear: args.traveldistancethisyear,
          timeincar: args.timeincar,
          emissions: args.emissions,
          fueleconomy: args.fueleconomy,
          parking: args.parking,
          timetraveld: args.timetraveld,
          startlocation: args.startlocation,
          endlocation: args.endlocation,
          ownerId: args.ownerId
        });
        return car.save();
      }
    }
  }
})


module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});




// adding cars mutation
// graphql does not like lastfilluplocation
// lastfilluplocation

// mutation {
//   addCar(carName: "BMW", latfillup: 30, latfilluptime: "2019-01-17-T09:02", fuelleft: 58, traveldsince: 30, diagnostic: "PowerSteering", diagnosticdetail: "seeamechanic", businessratio: 75, businesstotal: 300000, averagespeed: 28, traveldistancetotal: 34000000, traveldistancethisyear: 7600, timeincar: 120, emissions: 74, fueleconomy: 12, parking: "HOWDOIDISPLAYPARKIMGSPOT??", timetraveld: "2019-08-12-T11:02", startlocation: "Brsibane", endlocation: "Sydney", ownerId: "5d5d256fb83eef860d9358cc"){
//     carName
//     latfillup
//     latfilluptime
//     fuelleft
//     traveldsince
//     diagnostic
//     diagnosticdetail
//     businessratio
//     businesstotal
//     averagespeed
//     traveldistancetotal
//     traveldistancethisyear
//     timeincar
//     emissions
//     fueleconomy
//     parking
//     timetraveld
//     startlocation
//     endlocation
//   }
// }


