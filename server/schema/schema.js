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
  GraphQLList,
  GraphQLNonNull
} = graphql;


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
        // return _.find(owners, { id: parent.ownerId })
        return Owner.findById(parent.ownerId)
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
        return Car.find({ ownerId: parent.id })
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
        return Car.findById(args.id);
      }
    },
    owner: {
      type: OwnerType,
    args: { id: { type: GraphQLID}},
    resolve(parent, args){
      // return _.find(owners, {id: args.id});
      return Owner.findById(args.id);
    }
    },
    cars: {
      type: new GraphQLList(CarType),
      resolve(parent, args){
        // return cars;
        return Car.find({});
      }
    },
    owners: {
      type: new GraphQLList(OwnerType),
      resolve(parent, args){
        // return owners;
        return Owner.find({});
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
        firstName: { type: new GraphQLNonNull(GraphQLString)}
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
        carName: { type: new GraphQLNonNull(GraphQLString)},
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


//mutation adding owner

// mutation {
//   addOwner(firstName: "Sam"){
//     firstName
//   }
// }
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


