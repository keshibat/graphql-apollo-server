const graphql = require("graphql");
const _ = require('lodash');

const { GraphQLObjectType,
        GraphQLString,
        GraphQLInt,
        GraphQLSchema,
        GraphQLID
} = graphql;


//dummy data
const cars = [
  { id: "1", carName: "BMW X1", averagespeed: 30, traveldsince: 10000,  OwnerId: "23"},
  { id: "2", carName: "TOYOTA", averagespeed: 50, traveldsince: 10000, OwnerId: "40"},
  { id: "3", carName: "SUZUKI", averagespeed: 40, traveldsince: 10000, OwnerId: "51"}
]

const owners = [
  { firstName: "Sam", id: "23" },
  { firstName: "Buce", id: "40" },
  { firstName: "Billy", id: "51" }
]


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
        console.log(parent);
        return _.find(owners, {id: parent.OwenerId});
      }
    }
  })
});


const OwnerType = new GraphQLObjectType({
  name: "Owner",
  fields: () => ({
    id: { type: GraphQLID },
    firstName: { type: GraphQLString }
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
        return _.find(cars, {id: args.id});
      }
    },
    owner: {
      type: OwnerType,
    args: { id: { type: GraphQLID}},
    resolve(parent, args){
      return _.find(owner, {id: args.id});
    }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
});

