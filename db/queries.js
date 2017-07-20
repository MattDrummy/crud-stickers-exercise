const knex = require('./knex'); // the connection!

module.exports = {
  getAll(res) {
    knex('sticker').select('*').then(function(data) {
      res.json(data);
    })
  },
  getOne(id, res) {
  },
  create(sticker, res) {
  },
  update(id, sticker, res) {
  },
  delete(id, res) {
  }
}
