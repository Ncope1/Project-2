const express = require('express')
const hbs     = require('express-handlebars')
const app     = express()
const RoutinesController = require('./controllers/routines')


app.set('port', process.env.PORT || 4001)

app.set('view engine', 'hbs')

app.engine(
    '.hbs',
    hbs({
        extname: '.hbs',
        partialsDir: 'views/',
        layoutsDir: 'views/',
        defaultLayout: 'layout'
    })
)

app.use('/assets', express.static('public'))
app.use('/', routines)

// app.get('/', (req, res) => {
//     res.render('index')
// })

app.listen(app.get('port'), () => {
    console.log(`✅  We liiive on PORT: ${app.get('port')} Ayyyee!!🌟`);
});