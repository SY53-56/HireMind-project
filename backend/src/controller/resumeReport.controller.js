const ResumeReportModel = require("../models/resumeReports.model");
const pdfParse = require("pdf-parse/lib/pdf-parse");
const prepareResumeReport = require("../services/aiService");
const generatePdf = require("../config/genratePdf");


const delay = (ms)=>{
  return new Promise(resolve=> setTimeout(resolve, ms))
}
const postResumeReport = async (req, res) => {
  const { jobDescription } = req.body;
   
  try {
   
    if (!req.files) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const files = req.files;
console.log("BODY:", req.body);
console.log("FILE:", req.files);
    // Extract text from PDF
    let result= []
    for(let file of files){
 try {
  
    const pdfData =
      await pdfParse(file.buffer);
           await delay(4000);

console.log( "gdagfjkaslkdfjlkasj", pdfData.text);
    const resumeText =
      pdfData.text;

    const resumeReport =
      await prepareResumeReport({
        jobDescription,
        resumeText,
      });
console.log("files data", resumeText)
    const prepareResume =
      await ResumeReportModel.create({

        jobDescription,

        resumeFile:
          file.originalname,

        resumeScore:
          resumeReport.resumeScore,

        rank:
          resumeReport.rank,

        topCandidate:
          resumeReport.topCandidate,

        status:
          resumeReport.topCandidate
            ? "selected"
            : "pending",
      });

    result.push(prepareResume);

  } catch (err) {

    console.log(
      "PDF ERROR:",
      file.originalname,
       err.message
    );

    console.log(err.message);

  }
  
    }

    return res.status(200).json({
      message: "Resume checked successfully",
      data: result,
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