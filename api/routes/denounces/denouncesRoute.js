const { Router } = require('express');
const router = Router();
const { getDenounces } = require('../../controllers/denounces/getDenounces');
const {
  createDenounce,
} = require('../../controllers/denounces/createDenounce');
const verifyJWT = require('../../middleware/verifyJWT');
const verifyRoles = require('../../middleware/verifyRoles');

router.get('/', verifyJWT, verifyRoles(['admin']), getDenounces);
router.post('/', createDenounce);

module.exports = router;
