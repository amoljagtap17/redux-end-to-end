var bcrypt = require('bcryptjs')

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          username: 'admin',
          password: bcrypt.hashSync('notmypassword', bcrypt.genSaltSync(10))
        }
      ])
    })
}
