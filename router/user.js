const express = require('express');
const router = express.Router()

router.get('/', (req, res) =>{
  const { limit, offset } = req.query
  if( limit && offset) {
    res.json(
      {
        limit,
        offset
      }
    )
  }
  else{
    res.json([
      {
        name: 'pepe',
        price: 5
      },
      {
        name: 'paco',
        price: 5
      }
    ])
  }
})

router.get('/:id', (req, res) =>{
  const { id } = req.params
  res.json(
    {
      id,
      name: 'pepe',
      price: 5
    }
  )
})

module.exports = router
