
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
    
    return response.text || "Let's sing and have fun!";
  } catch (error) {
    console.error("Error generating challenge description:", error);
    return "Could not generate a description at this time. But it's sure to be a fun challenge!";
  }
};

export const generateChatReply = async (friendName: string, userMessage: string, language: 'id' | 'en'): Promise<string> => {
    if (!API_KEY) {
        return Promise.resolve(language === 'id' ? `(Balasan otomatis demo dari ${friendName})` : `(Auto-reply demo from ${friendName})`);
    }

    try {
        const prompt = `
        You are roleplaying as a friend named "${friendName}" in a karaoke social media app.
        The user sent you this message: "${userMessage}".
        
        Reply naturally, casually, and briefly (maximum 2 sentences).
        Answer exactly what they asked or react to what they said.
        Do not be overly formal. Use emojis if appropriate.
        Reply in ${language === 'id' ? 'Indonesian (Bahasa Gaul/Santai)' : 'English (Casual)'}.
        `;

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
        });

        return response.text || (language === 'id' ? "Waduh, aku bingung mau jawab apa hehe." : "Haha, I don't know what to say.");
    } catch (error) {
        console.error("Error generating chat reply:", error);
        return language === 'id' ? "Maaf, sinyal aku lagi jelek nih." : "Sorry, bad connection here.";
    }
};
