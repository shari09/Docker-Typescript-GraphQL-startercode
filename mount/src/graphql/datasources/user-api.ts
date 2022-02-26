import { DataSource } from 'apollo-datasource'
import { ITEM_NOT_FOUND } from '../../types/errors'
import { Store } from '../../types/store'

class UserAPI extends DataSource {
  private store: Store
  private context

  constructor({ store }) {
    super()
    this.store = store
  }

  initialize(config) {
    this.context = config.context
  }

  async findOne({ id }) {
    const user = await this.store.users.findOne({ where: { id } })
    if (!user) {
      throw new Error(ITEM_NOT_FOUND)
    }
    return user
  }

  async create({ password, username }) {
    const user = await this.store.users.create({ password, username })
    return user
  }

  async update({ id, username }) {
    const user = await this.store.users.findOne({ where: { id } })
    if (!user) {
      throw new Error(ITEM_NOT_FOUND)
    }
    const [_, updatedUser] = await this.store.users.update(
      {
        username,
      },
      {
        where: { id },
        returning: true,
      },
    )
    return updatedUser[0]
  }
}

export default UserAPI
