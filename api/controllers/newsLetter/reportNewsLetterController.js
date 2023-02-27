const newsLetter = require("../../models/newsLetter");
const ExcelJS = require("exceljs");

const handleReportsNewsLetter = async (req, res) => {
  try {
    const allSuscribers = await newsLetter.find({});
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Suscripores a news letter");
    worksheet.columns = [
      { header: "Nombre Completo", key: "fullName", width: 30 },
      { header: "Email", key: "email", width: 40 },
    ];
    allSuscribers.forEach((subscriber) => {
      worksheet.addRow(subscriber);
    });
    const excelFile = await workbook.xlsx.writeBuffer();
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader("Content-Disposition", "attachment; filename=Reporte.xlsx");
    return res.send(excelFile);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
module.exports = handleReportsNewsLetter;
