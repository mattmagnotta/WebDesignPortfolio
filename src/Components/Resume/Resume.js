import React, { useState } from 'react';
import { Document, Page, pdfjs } from "react-pdf";
import MMResume from '../../Assets/MM_Resume_Final.pdf'
export default function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  return (
    <div id='resumeContainer'>
      <Document
        file={MMResume}
        onLoadSuccess={onDocumentLoadSuccess}
        onError={console.error}
      >
        <Page pageNumber={pageNumber} style={{color:'white'}} />
      </Document>
      <p>Page {pageNumber} of {numPages}</p>
    </div>
  );
}
