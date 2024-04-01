const graphql = require('graphql');
const {
    GraphQLObjectType, GraphQLString,
    GraphQLID, GraphQLInt,GraphQLSchema,
    GraphQLList,GraphQLNonNull
} = graphql;

const User = require('../models/user');
const Post = require('../models/post');
const Timeline  = require('../models/timeline');
const Community = require('../models/community');

// const TestType = new GraphQLObjectType({
//     name: 'Test',
//     fields: () => ({
//         id: { type: GraphQLID },
//         name: { type: GraphQLString },
//         testmsg: { type: GraphQLString }
//     })
// });

const LinkagesType = new GraphQLObjectType({
    name: 'Linkages',
    fields: () => ({
        timelines: { type: new GraphQLList(GraphQLID) },
        communities: { type: new GraphQLList(GraphQLID) }
    })
});

const PostInteractionsType = new GraphQLObjectType({
    name: 'PostInteractions',
    fields: () => ({
        views: { type: GraphQLInt },
        likes: { type: GraphQLInt },
        shares: { type: GraphQLInt },
        saves: { type: GraphQLInt },
        reports: { type: new GraphQLList(GraphQLString) }
    })
});

const SubscriptionType = new GraphQLObjectType({
    name: 'Subscription',
    fields: () => ({
        subid: { type: GraphQLID },
        catagery: { type: GraphQLString },
        type: { type: GraphQLString }
    })
});

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: GraphQLID },
        username: { type: GraphQLString },
        phone: { type: GraphQLString },
        subscriptions: { type: new GraphQLList(SubscriptionType) }
    })
});

const PostType = new GraphQLObjectType({
    name: 'Post',
    fields: () => ({
        _id: { type: GraphQLID },
        user: {
            type: UserType,
            resolve(parent, args) {
                return User.find({ id: parent.userid });
            }
        },
        title: { type: GraphQLString },
        body: { type: GraphQLString },
        media: { type: new GraphQLList(GraphQLString) },
        time: { type: GraphQLString },
        interactions: { type: PostInteractionsType },
        keywords: { type: new GraphQLList(GraphQLString) },
        linkages: { type: LinkagesType }
    })
});


const TimelineType = new GraphQLObjectType({
    name: 'Timeline',
    fields: () => ({
        _id: { type: GraphQLID },
        title: { type: GraphQLString },
        description: { type: GraphQLString },
        catagery: { type: GraphQLString },
        posts: {
            type: new GraphQLList(PostType),
            resolve(parent, args) {
                return Post.find({ "linkages.timelines": { $in: [parent._id] }});
            }
        }
    })
});

const CommunityType = new GraphQLObjectType({
    name: 'Community',
    fields: () => ({
        _id: { type: GraphQLID },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        keywords: { type: new GraphQLList(GraphQLString) },
        followers: { type: GraphQLInt },
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        // test: {
        //     type: TestType,
        //     args: { id: { type: GraphQLID } },
        //     resolve: (parent, arge) => {
        //         return {
        //             id: 123,
        //             name: 'Test Name',
        //             testmsg: 'Test Message (' + arge.id + ')'
        //         }
        //     }
        // }

        user: {
            type: UserType,
            args: { id: { type: GraphQLID } },
            resolve: (parent, args) => {
                return User.findById(args.id);
            }
        },

        post: {
            type: PostType,
            args: { id: { type: GraphQLID } },
            resolve: (parent, args) => {
                return Post.findById(args.id);
            }
        },

        posts: {
            type: new GraphQLList(PostType),
            resolve: (parent, args) => {
                return Post.find({});
            }
        },

        timeline: {
            type: new GraphQLList(PostType),
            args: { id: { type: GraphQLID } },
            resolve: (parent, args) => {
                return Timeline.findById(args.id);
            }
        },

        communities: {
            type: new GraphQLList(CommunityType),
            resolve: (parent, args) => {
                return Community.find({});
            }
        },

        community: {
            type: CommunityType,
            args: { id: { type: GraphQLID } },
            resolve: (parent, args) => {
                return Community.findById(args.id);
            }
        
        }
    }
});

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        newPost: {
            type: PostType,
            args: {
                userid: { type: new GraphQLNonNull(GraphQLID) },
                title: { type: new GraphQLNonNull(GraphQLString) },
                body: { type: new GraphQLNonNull(GraphQLString) },
                media: { type: new GraphQLList(GraphQLString) },
                time: { type: new GraphQLNonNull(GraphQLString) },
                keywords: { type: new GraphQLList(GraphQLString) }
                // linkages: { type: new GraphQLNonNull(LinkagesType) }
            },
            resolve(parent, args) {
                let post = new Post({
                    userid: args.userid,
                    title: args.title,
                    body: args.body,
                    media: args.media,
                    time: args.time,
                    interactions: {
                        views: 0,
                        likes: 0,
                        shares: 0,
                        saves: 0,
                        reports: []
                    },
                    keywords: args.keywords
                    // linkages: args.linkages
                });
                return post.save();
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});

// mutation {
//     newPost(
//     userid: 22,
//     title: "hello world!",
//     body: "First Post Added",
//     media: [],
//     time: "2023-04-04 12:00",
//     keywords: ["firstpost"]
//     )
//     {
//         title
//         body
//     }
// }