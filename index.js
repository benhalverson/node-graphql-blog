import { GraphQLServer, PubSub } from 'graphql-yoga';

import db from './db.js';
import Query from './resolvers/Query.js';
import Mutation from './resolvers/Mutation.js';
import Post from './resolvers/Post.js';
import Comment from './resolvers/Comment.js';
import User from './resolvers/User.js';
import Subscription from './resolvers/Subscription.js';

const pubsub = new PubSub();

const server = new GraphQLServer({
	typeDefs: './schema.graphql',
	resolvers: {
		Query,
		Mutation,
		Subscription,
		Post,
		Comment,
		User
	},
	context: {
		db,
		pubsub
	}
});

server.start(() => {
	console.log('The server is running');
});
