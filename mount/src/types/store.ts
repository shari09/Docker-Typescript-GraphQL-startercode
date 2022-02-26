import User from '../db/models/user'

export interface Store {
  users: typeof User,
}
