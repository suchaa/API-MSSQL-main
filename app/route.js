const routes = require('express').Router();

// for test
routes.get('/', (req, res) => {
    res.send('Connected!')
})

routes.use('/test', require('../controller/test'));

module.exports = routes;