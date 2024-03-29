const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString,
    GraphQLID, GraphQLInt, GraphQLSchema } = graphql;

const TestType = new GraphQLObjectType({
    name: 'Test',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        testmsg: { type: GraphQLString }
    })
});


const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        test: {
            type: TestType,
            args: { id: { type: GraphQLID } },
            resolve: (parent, arge) => {
                return {
                    id: 123,
                    name: 'Test Name',
                    testmsg: 'Test Message (' + arge.id + ')'
                }
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});