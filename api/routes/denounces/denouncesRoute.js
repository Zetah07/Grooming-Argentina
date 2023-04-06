const { Router } = require('express');
const router = Router();
const { getDenounces } = require('../../controllers/denounces/getDenounces');
const {
  createDenounce,
} = require('../../controllers/denounces/createDenounce');
const verifyJWT = require('../../middleware/verifyJWT');
const verifyRoles = require('../../middleware/verifyRoles');
const handleReportsDenounces = require('../../controllers/reports/denounceReport');

router.get('/', verifyJWT, verifyRoles(['admin']), getDenounces);
router.get('/report', handleReportsDenounces);
router.post('/', createDenounce);

module.exports = router;
