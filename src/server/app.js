const express = require('express');
const mongoose = require('mongoose');
const { createHandler } = require('graphql-http/lib/use/express');
const schema = require('./schema/schema');
const app = express();

const cors = require("cors");

app.use(cors({
    optionsSuccessStatus: 200, //option sucess status
    origin: "http://localhost:3000", //origin allowed to access the server
}));

mongoose.connect('mongodb+srv://abhinandanbhuse23:mZslsYm4fCyIbSv2@cluster0.3k9mvvu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
 
mongoose.connection.once('open', () => {
   console.log('connected to database');
});

app.use('/graphql', createHandler({ schema }));

app.listen(4000, () => {
    console.log('GraphQL Listening on port 4000');
});