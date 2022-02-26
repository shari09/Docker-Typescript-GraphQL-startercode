import logger from '../logger'

const graphqlLogger = {
  requestDidStart: async ({ request }) => {
    logger.info(`GraphQL request: ${request.query}`)
  },
}

export default graphqlLogger
