import { useState } from 'react';
import pdfjs from 'pdfjs-dist/build/pdf';

function PdfUploader() {
  const [pdfFile, setPdfFile] = useState(null);

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    setPdfFile(file);

    const loadingTask = pdfjs.getDocument(URL.createObjectURL(file));
    const pdfDocument = await loadingTask.promise;

    const numPages = pdfDocument.numPages;
    let pdfContent = '';

    for (let pageNumber = 1; pageNumber <= numPages; pageNumber++) {
      const page = await pdfDocument.getPage(pageNumber);
      const pageText = await page.getTextContent();
      pageText.items.forEach(item => {
        pdfContent += item.str;
      });
    }

    console.log(pdfContent);
  };

  return (
    <div>
      <input type="file" accept=".pdf" onChange={handleFileChange} />
    </div>
  );
}

export default PdfUploader;


