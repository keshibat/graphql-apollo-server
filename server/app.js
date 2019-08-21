const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");

const app = express();


mongoose.connect("mongodb+srv://dbuser:R9rsZ6Ohu11x3QQH@gofar-rvxzr.mongodb.net/test?retryWrites=true&w=majority");
mongoose.connection.once("open", () => {
  console.log("connected to database");
});


app.use("/graphql", graphqlHTTP({
  schema,
  graphiql: true
}));


app.listen(4000, () => {
  console.log("Now listeing for requests on port 40000");
})


