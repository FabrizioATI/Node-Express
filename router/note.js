const express = require('express');

const NoteService = require('./../services/note.service');

const router = express.Router();
const service = new NoteService();

router.get('/', (req, res) => {
  const note = service.find();
  res.json(note);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const note = service.findOne(id);
  res.json(note);
});

router.post('/', (req, res) => {
  const body = req.body;
  res.status(201).json({
    message: 'created',
    data: body
  });
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'update',
    data: body,
    id,
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    message: 'deleted',
    id,
  });
});

module.exports = router;
