import Link from "next/link";
import { DocWrapper, Heading, Section, StyledDoc, StyledPage, StyledPageMobile, Subtitle, Title, Wrapper } from "./styles";
import { Document, Page } from "react-pdf";
import { useState } from "react";
import { pdfjs } from 'react-pdf'

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const PDFViewer = ({ cpf }: any) => {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  return (
    <div style={{height: '100vh'}}>
        <iframe src={`/informes/${cpf}.pdf`} width={'100%'} height={'100%'} />
    </div>
  );
}

export default PDFViewer;