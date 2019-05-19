import bookshelf from '../connection'
import Invoice from './Invoice'

export default bookshelf.Model.extend({
  tableName: 'users',
  invoices: function () {
    return this.hasMany(Invoice)
  }
})
