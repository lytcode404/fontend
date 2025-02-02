import pdf from 'pdf-parse';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    console.log(" handlers POST")
    const { pdfData } = req.body;
    const parsedPdfData = await pdf(pdfData);
    res.status(200).json(parsedPdfData);
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
