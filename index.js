import { GraphQLServer } from 'graphql-yoga';

// Type definitions (schema) 
const typeDefs = `
type Query {
    greeting(name: String): String!
    add(a: Float!, b: Float!): Float!
    me: User!
    post: Post!
}

 type User {
    id: ID!
    name: String!
    email: String!
    age: Int
 }

 type Post {
     id: ID!
     title: String!
     body: String!
     published: Boolean!
 }
`;

// Resolvers

const resolvers = {
    Query: {
        greeting(parent, args, context, info) {
           console.log(args);
           if(args.name) {
            return `Hello ${args.name}`;
           }
           return 'Hello!';
        },
        add(parent, args) {
            return args.a + args.b;
        },
        me() {
            return {
                id: '1234',
                name: 'Ben',
                email: 'ben@benhalverson.me',
                age: 39,
            };
        },
        post() {
            return {
                id: '69420',
                title: 'Art of war',
                body: 'Hello world',
                published: true
            };
        }
    }
};

const server = new GraphQLServer({
    typeDefs,
    resolvers,
});

server.start(() => {
    console.log('The server is running');
});