const express = require('express')
const hbs     = require('express-handlebars')
const app     = express()


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

// app.use('/assets', express.static('public'))
// app.use('/routines', routines)

app.get('/', (req, res) => {
    res.render('./app-welcome')
})

app.listen(app.get('port'), () => {
    console.log(`✅  We liiive on PORT: ${app.get('port')} Ayyyee!!🌟`);
});