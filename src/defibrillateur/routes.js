const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getDefibrillateurs);
router.post('/', controller.addDefibrillateur);
router.get('/:id', controller.getDefibrillateursById);
router.put('/:id', controller.updateDefibrillateur);
router.delete('/:id', controller.removeDefibrillateur);

module.exports = router;
