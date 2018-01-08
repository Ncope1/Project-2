const express = require('express')
  const app     = express()

  app.set('port', process.env.PORT || 3001)
  
  app.get('/', (req, res) => {
    res.send('wazzup world')
  })

  app.listen(app.get('port'), console.log(`we liiive on PORT`, app.get('port')))