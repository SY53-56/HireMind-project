const PDFDocument = require("pdfkit");
const fs = require("fs");

const generatePdf = (resumes) => {
  const doc = new PDFDocument();

  const filePath = "top10-resumes.pdf";

  doc.pipe(fs.createWriteStream(filePath));

  doc.fontSize(18).text("Top 10 Resumes Report", { align: "center" });

  doc.moveDown();

  resumes.forEach((r, index) => {
    doc.fontSize(12).text(
      `${index + 1}. Score: ${r.resumeScore} | Rank: ${r.rank}`
    );

    doc.text(`Job Description: ${r.jobDescription}`);
    doc.text(`Resume File: ${r.resumeFile}`);
    doc.moveDown();
  });

  doc.end();

  return filePath;
};

module.exports = generatePdf;