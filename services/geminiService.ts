import { GoogleGenAI } from "@google/genai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

if (!API_KEY) {
  console.warn("VITE_GEMINI_API_KEY is not set. Gemini API calls will fail.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

export const generateChallengeDescription = async (challengeTitle: string): Promise<string> => {
  try {
    const prompt = `Generate a fun, short, and exciting description for a karaoke app challenge called '${challengeTitle}'. Explain the rules in one simple sentence. The tone should be encouraging and playful. Maximum 40 words.`;

    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
    });

    return response.text();
  } catch (error) {
    console.error("Error generating challenge description:", error);
    return `Could not generate a description for "${challengeTitle}".`;
  }
};
