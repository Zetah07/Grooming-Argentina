const denounces = require('../../models/denounces');
const ExcelJS = require('exceljs');

const handleReportsDenounces = async (req, res) => {
  try {
    const allSuscribers = await denounces.find({});
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Suscripores a news letter');

    worksheet.columns = [
      { header: 'Situación', key: 'situation', width: 30 },
      { header: 'Donde', key: 'where', width: 40 },
      { header: 'Enlace', key: 'link', width: 30 },
      { header: 'Descripción', key: 'description', width: 60 },
      { header: 'Nombre', key: 'name', width: 30 },
      { header: 'Email', key: 'email', width: 40 },
    ];

    allSuscribers.forEach((subscriber) => {
      worksheet.addRow(subscriber);
    });

    const excelFile = await workbook.xlsx.writeBuffer();
    res.setHeader(
      'Content-Type',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    );
    res.setHeader(
      'Content-Disposition',
      'attachment; filename=ReporteDenuncias.xlsx'
    );
    return res.send(excelFile);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = handleReportsDenounces;
