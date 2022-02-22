require('dotenv').config()

const express = require('express');
const routerApi = require('./router');

const app = express();

app.use(express.json())

app.get('/', (req, res) =>{
  res.send('Hola mundo!')
})

routerApi(app)


const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
