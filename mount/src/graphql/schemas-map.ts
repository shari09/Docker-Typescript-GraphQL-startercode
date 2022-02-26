import { makeExecutableSchema } from '@graphql-tools/schema'
import { GraphQLSchema } from 'graphql'
import 'graphql-import-node'
import resolvers from './resolvers-map'
import * as emptyTypeDefs from './schemas/empty.graphql'
import * as userTypeDefs from './schemas/user.graphql'



const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs: [emptyTypeDefs, userTypeDefs],
  resolvers,
})

export default schema
