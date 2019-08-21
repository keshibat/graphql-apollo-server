const graphql = require("graphql");
const _ = require('lodash');

const { GraphQLObjectType,
        GraphQLString,
        GraphQLInt,
        GraphQLSchema
} = graphql;


//dummy data
const cars = [
  { carName: "BMW X1", averagespeed: 30, traveldsince: 10000, id: "1"},
  { carName: "TOYOTA", averagespeed: 50, traveldsince: 10000, id: "2" },
  { carName: "SUZUKI", averagespeed: 40, traveldsince: 10000, id: "3" }
]


const CarType = new GraphQLObjectType ({
  name: "Car",
  fields: () => ({
    id: { type: GraphQLString },
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
    endlocation: { type: GraphQLString }
  })
});


const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    car: {
      type: CarType,
      args: {id: {type: GraphQLString}},
      resolve(parent, args) {
        //code to get data from db /other source
        return _.find(cars, {id: args.id});
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
});

