import { ApolloServer } from 'apollo-server-express'
import 'dotenv/config'
import app from './app'
import { init as dbInit } from './db/init'
import { store } from './db/store'
import { getDataSources } from './graphql/datasources-map'
import schema from './graphql/schemas-map'
import graphqlLogger from './plugins/graphql-logger'

const server = new ApolloServer({
  schema,
  dataSources: () => getDataSources(store),
  plugins: [graphqlLogger],
})

const main = async () => {
  await dbInit()
  await server.start()
  server.applyMiddleware({ app, path: '/graphql' })
}

main()
