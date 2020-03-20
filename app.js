const dotenv = require("dotenv").config(),
  express = require("express"),
  mongoose = require("mongoose"),
  gqlServer = require("./graphql");

mongoose.connect(
'your database uri',
  { useCreateIndex: true, useNewUrlParser: true, useFindAndModify: false },
  error => {
    if (error) {
      throw error;
    }
    console.log("🚀 Successfully connected to database !");
  }
);

const app = express();
gqlServer.applyMiddleware({ app });

app.listen({ port: 5000 }, () =>
  console.log(
    `🚀 Server ready at http://localhost:5000${gqlServer.graphqlPath}`
  )
);
