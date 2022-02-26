import UserAPI from './datasources/user-api'

export const getDataSources = (store) => ({
  userAPI: new UserAPI({ store }),
})
