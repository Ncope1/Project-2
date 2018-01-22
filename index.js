const express = require('express')
// const hbs     = require('express-handlebars')
const app     = express()
const RoutinesController = require('./controllers/routines')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')


app.set('port', process.env.PORT || 4001)
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

// app.set('view engine', 'hbs')

// app.engine(
//     '.hbs',
//     hbs({
//         extname: '.hbs',
//         partialsDir: 'views/',
//         layoutsDir: 'views/',
//         defaultLayout: 'layout'
//     })
// )

// app.use('/assets', express.static('public'))
app.use('/routines', RoutinesController)


app.get('/', (req, res) => {
    res.send('index')
})

// app.use('/', RoutinesController)
// app.get('/', (req, res) => {
//     res.redirect('/routines')
// })

app.listen(app.get('port'), () => {
    console.log(`✅  We liiive on PORT: ${app.get('port')} Ayyyee!!🌟`)
})