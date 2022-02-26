import { IResolvers } from '@graphql-tools/utils'
import User from '../../db/models/user'
import {
  MutationCreateUserArgs, MutationUpdateUserArgs, QueryUserArgs
} from '../generated'


const user = async (
  _parent: unknown,
  args: QueryUserArgs,
  context,
): Promise<User> => {
  const id = args.id
  const user: User = await context.dataSources.userAPI.findOne({ id })
  return user
}

const createUser = async (
  _parent: unknown,
  args: MutationCreateUserArgs,
  context,
): Promise<User> => {
  const { password, username } = args
  const user: User = await context.dataSources.userAPI.create({
    password,
    username,
  })
  return user
}

const updateUser = async (
  _parent: unknown,
  args: MutationUpdateUserArgs,
  context,
): Promise<User> => {
  const id = args.id
  const user: User = await context.dataSources.userAPI.update({
    id,
    username: args.username,
  })
  return user
}

export const UserResolvers: IResolvers = {
  Query: {
    user,
  },
  Mutation: {
    createUser,
    updateUser,
  },
}
