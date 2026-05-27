const { GoogleGenAI } = require("@google/genai");

const genAI = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const prepareResumeReport = async ({resumeText, jobDescription}) => {
  try {
   const prompt = `
You are an expert HR recruiter.

Compare the resume with the job description carefully.

Give realistic scoring.

Rules:
- skill should match and their requirement = higher score
- Missing frontend skills = lower score
- Freshers allowed

Job Description:
${jobDescription}

Resume:
${resumeText}

Return ONLY valid JSON:

{
  "resumeScore": number,
  "rank": number,
  "topCandidate": boolean
}
`;


    const response =
      await genAI.models.generateContent({

      model: "gemini-2.5-flash",

      contents: prompt,
    });

    const text = response.text;

    console.log("AI RAW:", text);

    // Extract JSON safely
    const jsonMatch =
      text.match(/\{[\s\S]*\}/);

    if (!jsonMatch) {
      throw new Error(
        "No valid JSON found"
      );
    }

    const parsed =
      JSON.parse(jsonMatch[0]);

    return parsed;
  } catch (e) {
    console.error("Gemini Error:", e);
    throw e;
  }
};

module.exports= prepareResumeReport;