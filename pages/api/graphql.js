import ApollerServer ,{ gql, ApolloServer } from 'apollo-server-micro'
import { makeExecutableSchema } from 'graphql-tools'
import { MongoClient } from 'mongodb'
const uuid = require('uuid-v4')

const typeDefs = gql`

    type Category {
        category: String!
    }

    type User {
        id: ID!
        index: String!
        user: String!
        password: String!
    }

    type Post {
        id: ID!
        category: String!
        date: String!
        author: String!
        title: String!
        subtitle: String!
        content: String!
        index: String!

    }


    type Query {
        posts(category: String!): [Post]!,
        post(index: String!): Post,
        user(user: String!, password: String!): [User]!,
        category: [Category]!,
    }
    
    type Mutation {
        createPost(            
            category: String!,
            date: String!,
            title: String!,
            subtitle: String!,
            content: String!
        ): Post,
        createCategory(category: String!): Category,
        createUser(user: String!, password: String!): User,
    }

    schema {
        query: Query,
        mutation: Mutation
    }

`;

const resolvers = {
    Query: {
        posts(_parent, _args, _context, _info) {
            const isObjectEmpty = obj => obj.category === 'null'
            const filter = isObjectEmpty(_args) ? {} : _args;            
            return _context.db
            .collection('posts')
            .find(filter).toArray()
            .then(res => {                
                return res
            })
        },
        post(_parent, _args, _context, _info) {           
            return _context.db
            .collection('posts')
            .findOne(_args)
            .then(res => {
                return res
            })
        },
        category(_parent, _args, _context, _info){
            return _context.db
            .collection('categorias')
            .find({}).toArray()
            .then(res => res)
        },
        user(_parent, _args, _context, _info){
            console.log(_args)
            return _context.db
            .collection('users')
            .find(_args).toArray()
            .then(res => res)
        },
    },
    Mutation: {
        createPost: async(_parent, _args, _context, _info)=>{
            const id = uuid()
            const objIdentifier = {..._args, index: id}
            const res = await _context.db
                        .collection('posts')
                        .insert(objIdentifier)
            console.log('Postado com sucesso!')
        },
        createCategory: async(_parent, _args, _context, _info)=>{
            await _context.db
                .collection('categorias')
                .insertOne(_args)
            console.log('Postado com sucesso!')
        },
        createUser: async(_parent, _args, _context, _info)=>{
            const id = uuid()
            const objIdentifier = {..._args, index: id}
            await _context.db
                .collection('users')
                .insertOne(objIdentifier)
            console.log('Postado com sucesso!')
        },

    }
}

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})

let db

const apolloServer = new ApolloServer({
    schema,
    context: async () => {
        if(!db){
            try {
                const dbClient = new MongoClient(process.env.MONGO_DB_URI,{
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                })
                if(!dbClient.isConnected()) await dbClient.connect()
                db = dbClient.db('blog')
            } catch(e){
                console.log('--->Error conection', e)
            }
        }
        return { db }
    },
})


export const config = {
    api: {
        bodyParser: false
    }
}

const handler = apolloServer.createHandler({ path: '/api/graphql' });
export default handler;