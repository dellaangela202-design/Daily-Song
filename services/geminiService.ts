
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  console.warn("API_KEY is not set. Gemini API calls will fail.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY! });

export const generateChallengeDescription = async (challengeTitle: string): Promise<string> => {
  if (!API_KEY) {
    return Promise.resolve(`This is a mock description for "${challengeTitle}". The real description requires a Gemini API key. It's a super fun challenge where you have to be really creative!`);
  }
  
  try {
    const prompt = `Generate a fun, short, and exciting description for a karaoke app challenge called '${challengeTitle}'. Explain the rules in one simple sentence. The tone should be encouraging and playful. Maximum 40 words.`;
    
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
    });
    
    return response.text;
  } catch (error) {
    console.error("Error generating challenge description:", error);
    return "Could not generate a description at this time. But it's sure to be a fun challenge!";
  }
};
