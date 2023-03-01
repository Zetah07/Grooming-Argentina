const UserStatus = require("../../models/userStatus");
const ExcelJS = require('exceljs');

const getReport = async () => {
  try {

    const userStatusData = await UserStatus.find({});


    const workbook = new ExcelJS.Workbook();


    const worksheet = workbook.addWorksheet('User Status Data');


    worksheet.columns = [
      { header: 'Email', key: 'email', width: 20 },
      { header: 'Nombre', key: 'name', width: 20 },
      { header: 'Apellido', key: 'lastName', width: 20 },
      { header: 'Número de Documento', key: 'document', width: 15 },
      { header: 'Nacionalidad', key: 'nationality', width: 20 },
      { header: 'Fecha de nacimiento', key: 'birthDate', width: 15 },
      { header: 'Provincia', key: 'province', width: 15 },
      { header: 'Localidad', key: 'location', width: 15 },
      { header: 'Dirección', key: 'address', width: 20 },
      { header: 'género', key: 'genre', width: 10 },
      { header: 'Teléfono celular', key: 'phone', width: 15 },
      { header: 'Estudios', key: 'schooling', width: 20 },
      { header: 'Profesión u ocupación', key: 'profession', width: 20 },
      { header: 'Cómo nos conociste', key: 'howKnowGrooming', width: 20 },
      { header: 'Horas de voluntariado', key: 'howManyHours', width: 15 },
      { header: 'Facebook', key: 'facebook', width: 20 },
      { header: 'Twitter', key: 'twitter', width: 20 },
      { header: 'Instagram', key: 'instagram', width: 20 },
      { header: 'LinkedIn', key: 'linkedIn', width: 20 },
      { header: 'Identificación', key: 'adjDocument', width: 20 },
      { header: 'Curriculum Vitae', key: 'CV', width: 20 },
      { header: '¿Cómo definirías el grooming?', key: 'opinion', width: 20 },
      { header: '¿Conocés a alguien dentro de Grooming Argentina?', key: 'knowGroominPerson', width: 20 },
      { header: 'Si tu respuesta anterior fue Si, contanos a quién conocés.', key: 'whoGroominPerson', width: 20 },
      { header: '¿Por qué te gustaría ser voluntario/a de Grooming Argentina?', key: 'whyGroomin', width: 20 },
      { header: '¿Cuál es tu interés en la temática?', key: 'theme', width: 20 },
      { header: '¿Cuáles son tus expectativas dentro de la ONG?', key: 'expectations', width: 20 },
      { header: 'Status', key: 'status', width: 15 },
    ];


    userStatusData.forEach(userStatus => {
      worksheet.addRow(userStatus);
    });

    return await workbook.xlsx.writeBuffer();
  } catch (err) {
    throw new Error("se ha generado un error creando el reporte.");
  }
}

module.exports = getReport;