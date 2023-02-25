import React from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";

const DownloadReportButton = () => {
  const handleDownload = async () => {
    try {
      const response = await axios.get("http://localhost:3500/reports", {
        responseType: "blob",
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "Report.xlsx");
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error(error);
    }
  };

  return <Button onClick={handleDownload}>Descargar reporte</Button>;
};

export default DownloadReportButton;
