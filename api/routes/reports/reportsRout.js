const express = require('express');
const getReport = require("../../controllers/reports/reportController");

const router = express.Router();


router.get('/', async (req, res, next) => {
  try {
    const excelFile = await getReport();
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename=Reporte.xlsx');
    res.send(excelFile);
  } catch (error) {
    next(error);
  }
});

module.exports = router;