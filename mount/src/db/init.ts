import logger from '../logger'
import User from './models/user'

export const init = async () => {
  await User.sync()
  logger.info('Database initialized')
}
