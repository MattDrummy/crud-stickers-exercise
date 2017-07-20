const express = require('express');
const router = express.Router();
const queries = require('../db/queries')
/* This is where you will put your routers */

router.get('/', (req, res) => {
  res.json(queries.getAll());
});
router.get('/:id', (req, res) => {
  res.json(queries.getOne(req.params.id));
});
router.post('/', (req, res) => {
  res.json(queries.create(req.body));
});
router.put('/:id', (req, res) => {
  res.send(queries.update(req.params.id, req.body));
});
router.delete('/:id', (req, res) => {
  res.send(queries.delete(req.params.id));
});

module.exports = router;
