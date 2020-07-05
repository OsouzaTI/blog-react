import ApollerServer ,{ gql, ApolloServer } from 'apollo-server-micro'
import { makeExecutableSchema } from 'graphql-tools'
import { MongoClient } from 'mongodb'
const uuid = require('uuid-v4')

const typeDefs = gql`

    type Post {
        id: ID!
        category: String!
        data: String!
        author: String!
        title: String!
        subtitle: String!
        content: String!
        index: String!

    }


    type Query {
        posts(category: String!): [Post]!,
        post(index: String!): Post,
    }
    
    type Mutation {
        createPost(            
            category: String!,
            date: String!,
            title: String!,
            subtitle: String!,
            content: String!
        ): Post
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
            console.log(filter)
            return _context.db
            .collection('posts')
            .find(filter).toArray()
            .then(res => {
                console.log(res)
                return res
            })
        },
        post(_parent, _args, _context, _info) {           
            return _context.db
            .collection('posts')
            .findOne(_args)
            .then(res => {
                console.log(res)
                return res
            })
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
        }
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