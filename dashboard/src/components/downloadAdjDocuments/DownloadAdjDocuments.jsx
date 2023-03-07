import React from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";

const DownloadPDFButton = ({ userId, documentType }) => {
  const handleDownload = async () => {
    try {
      const response = await axios.post(
        "/documents",
        { [documentType]: userId },
        {
          responseType: "blob",
        }
      );

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `${userId}.pdf`);
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Button onClick={handleDownload}>
      Descargar documento adjunto {documentType === "CV" ? "CV" : "AdjDocument"}
    </Button>
  );
};

export default DownloadPDFButton;
