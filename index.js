import { GraphQLServer } from 'graphql-yoga';

import db from './db.js';
import Query from './resolvers/Query.js';
import Mutation from './resolvers/Mutation.js';
import Post from './resolvers/Post.js';
import Comment from './resolvers/Comment.js';
import User from './resolvers/User.js';

const server = new GraphQLServer({
	typeDefs: './schema.graphql',
	resolvers: {
		Query,
		Mutation,
		Post,
		Comment,
		User
	},
	context: {
		db
	}
});

server.start(() => {
	console.log('The server is running');
});
