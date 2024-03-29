const express = require('express');
const { createHandler } = require('graphql-http/lib/use/express');
const schema = require('./schema/schema');

const app = express();

app.all('/graphql', createHandler({ schema }));

app.listen(3000, () => {
    console.log('Listening on port 3000');
});