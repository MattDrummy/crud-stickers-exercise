const knex = require('./knex'); // the connection!

module.exports = {
  getAll(res) {
    knex('sticker').select('*').then((data) => {
      res.json(data);
    })
  },
  getOne(id, res) {
    knex('sticker').select('*').where('id', id).first().then((data) => {
      res.json(data);
    })
  },
  create(sticker, res) {
    knex('sticker').insert(sticker).then((data) => {
      knex('sticker').select('*').where(sticker).first().then((data) => {
        res.json(data);
      });
    });
  },
  update(id, sticker, res) {
    knex('sticker').where('id', id).update(sticker).then((data) => {
      knex('sticker').select('*').where(sticker).first().then((data) => {
        res.json(data);
      })
    });
  },
  delete(id, res) {
    console.log(id);
    knex('sticker').where('id', id).del().then((data) => {
      res.json({
        deleted: true
      })
    })
  }
}
