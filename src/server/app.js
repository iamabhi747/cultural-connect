const express = require('express');
const mongoose = require('mongoose');
const { createHandler } = require('graphql-http/lib/use/express');
const schema = require('./schema/schema');

const app = express();

mongoose.connect('mongodb+srv://abhinandanbhuse23:mZslsYm4fCyIbSv2@cluster0.3k9mvvu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
 
mongoose.connection.once('open', () => {
   console.log('connected to database');
});

app.all('/graphql', createHandler({ schema }));

app.listen(4000, () => {
    console.log('GraphQL Listening on port 4000');
});