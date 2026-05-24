const ResumeReportModel = require("../models/resumeReports.model");
const pdfParse = require("pdf-parse/lib/pdf-parse");
const prepareResumeReport = require("../services/aiService");
const generatePdf = require("../config/genratePdf");

const postResumeReport = async (req, res) => {
  const { jobDescription } = req.body;
   
  try {
   
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const file = req.file;
console.log("BODY:", req.body);
console.log("FILE:", req.file);
    // Extract text from PDF
    const pdfData = await pdfParse(file.buffer);
    const resumeText = pdfData.text;

    // AI processing
    const resumeReport = await prepareResumeReport({
      jobDescription,
      resumeText,
    });

    if (!resumeReport) {
      return res.status(500).json({ message: "AI processing failed" });
    }
console.log(  "ai",resumeReport)
    // Save to DB
    const prepareResume = await ResumeReportModel.create({
      jobDescription,
      resumeFile:file.originalname,
      resumeScore: resumeReport.resumeScore,
      rank: resumeReport.rank,
      topCandidate: resumeReport.topCandidate,
    });

    return res.status(200).json({
      message: "Resume checked successfully",
      data: prepareResume,
    });

  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};


const getTopCandidateResume = async(req,res)=>{
    try{
      const resume= await ResumeReportModel.find().sort({ resumeScore: -1 }).limit(10)
         const baseUrl = process.env.BASE_URL;
         const pdfFile= generatePdf(resume)
         const data = pdfFile.map((r) => ({
      id: r._id,
      score: r.resumeScore,
      rank: r.rank,
      viewLink: `${baseUrl}/resume/view/${r._id}`
    }));

    res.json({
      message: "Top 10 candidates",
      data
    });
       res.status(200).json({message:"top ten candidate", data:pdfResume})
    }catch(e){
         return res.status(500).json({ message: e.message }); 
    }
}
const  veiwResumeReport = async(req,res)=>{
    const resume= await ResumeReportModel.findById(req.params.id)

      if (!resume) {
    return res.status(404).json({ message: "Not found" });
  }

  res.sendFile(resume.resumeFile, { root: "." });
}
module.exports ={
    veiwResumeReport,
    postResumeReport,
    getTopCandidateResume
}