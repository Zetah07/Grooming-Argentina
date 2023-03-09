import React from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";


const DownloadPDFButton = ({ documentType }) => {
  return (
    <Button>
      Descargar documento adjunto {documentType === "CV" ? "CV" : "AdjDocument"}
    </Button>
  );
};

export default DownloadPDFButton;
