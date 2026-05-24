const { GoogleGenAI } = require("@google/genai");

const genAI = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const prepareResumeReport = async (resumeText, jobDescription) => {
  try {
    const prompt = `
You are an AI HR assistant.

Analyze this resume against the job description.

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

    const response = await genAI.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });
console.log(response.text)
    return response.text;
  } catch (e) {
    console.error("Gemini Error:", e);
    throw e;
  }
};

module.exports= prepareResumeReport;