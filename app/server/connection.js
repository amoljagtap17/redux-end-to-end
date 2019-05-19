import knex from 'knex'
import bookshelf from 'bookshelf'
import config from '../../knexfile'

export const kx = knex(config)
export default bookshelf(kx)
