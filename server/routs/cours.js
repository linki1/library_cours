const Router = require('express')
const router = new Router()
const coursControler = require('../controls/coursControler')

router.post('/',coursControler.createCours)
router.get('/',coursControler.GetCours)
router.get('/:id',coursControler.GetOneCours)
module.exports = router