import React from 'react';
import axios from '../../api/axios';
import Button from 'react-bootstrap/Button';

const DownloadSuscriptorsButton = () => {
  const handleDownload = async () => {
    try {
      const response = await axios.get('/newsLetter/report', {
        responseType: 'blob',
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'ReporteSuscriptores.xlsx');
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Button
      onClick={handleDownload}
      style={{
        height: '2rem',
        paddingTop: '0',
        paddingBottom: '0',
        backgroundColor: '#004b82',
      }}
    >
      Descargar reporte
    </Button>
  );
};

export default DownloadSuscriptorsButton;
