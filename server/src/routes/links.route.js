const router = require('express').Router();
const linksController = require('../controllers/links.controller');

router.get('/', linksController.getAllLinks);
router.post('/', linksController.createLink);
router.put('/:short', linksController.editLink);
router.get('/:short', linksController.getLinkFromCode);
router.delete('/:short', linksController.deleteLink);

module.exports = router;
