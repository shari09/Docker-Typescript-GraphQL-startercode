import { IResolvers } from '@graphql-tools/utils'
import * as _ from 'lodash/fp'
import { UserResolvers } from './resolvers/user'

const resolverMap: IResolvers = _.flow(
  _.merge({}),
)(UserResolvers)

export default resolverMap
