const express = require('express')
const router = express.Router()
const Controller = require('../controller/control')

router.get('/', Controller.getAllStores)

router.get('/:id', Controller.getStore)

router.post('/', Controller.addStore)

router.put('/:id', Controller.updateStore)

router.delete('/:id', Controller.deleteStore)

module.exports = router;