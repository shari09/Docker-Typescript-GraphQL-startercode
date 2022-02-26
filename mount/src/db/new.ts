import 'dotenv/config'
import { Sequelize } from 'sequelize'

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is not defined')
}

export const getNewConnection = () =>
  process.env.NODE_ENV === 'development'
    ? new Sequelize(process.env.DATABASE_URL ?? '', {
        username: process.env.PG_LOCAL_USERNAME,
        password: process.env.PG_LOCAL_PASSWORD,
      })
    : new Sequelize(process.env.DATABASE_URL!, {
        dialectOptions: {
          ssl: {
            require: true,
            rejectUnauthorized: false,
          },
        },
      })
