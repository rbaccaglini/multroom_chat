
var app = require('./config/server')

var datetime = new Date()

app.listen(8080, function() {
    console.log('Servidor ON - ' + datetime.toISOString());
})