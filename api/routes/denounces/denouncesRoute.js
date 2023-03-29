const { Router } = require('express');
const router = Router();
const { getDenounces } = require('../../controllers/denounces/getDenounces');
const verifyJWT = require('../../middleware/verifyJWT');
const verifyRoles = require('../../middleware/verifyRoles');

router.get('/', verifyJWT, verifyRoles(['admin']), getDenounces);

module.exports = router;
