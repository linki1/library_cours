const Router = require('express')
const router = new Router()
const user = require('./user')
const cours = require('./cours')

router.use('/user',user)
router.use('/cours',cours)

module.exports = router