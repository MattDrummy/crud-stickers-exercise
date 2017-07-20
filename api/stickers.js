const express = require('express');
const router = express.Router();
const queries = require('../db/queries')
/* This is where you will put your routers */

router.get('/', (req, res) => {
  queries.getAll(res);
});
router.get('/:id', (req, res) => {
  res.json(queries.getOne(req.params.id, res));
});
router.post('/', (req, res) => {
  res.json(queries.create(req.body, res));
});
router.put('/:id', (req, res) => {
  res.send(queries.update(req.params.id, req.body, res));
});
router.delete('/:id', (req, res) => {
  res.send(queries.delete(req.params.id, res));
});

module.exports = router;
