import { GoogleGenAI } from "@google/genai";

// Initialize Gemini Client
// We assume process.env.API_KEY is available as per instructions.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const MODEL_NAME = 'gemini-3-flash-preview';

/**
 * Sends a prompt to the Architecture Assistant.
 * Uses a system instruction to ground the AI in the persona of a Senior Building Intelligence Architect.
 */
export const askArchitectureAssistant = async (userPrompt: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: MODEL_NAME,
      contents: userPrompt,
      config: {
        systemInstruction: `You are a Senior Building Intelligence System Architect with 25 years of experience. 
        Your persona is professional, rigorous, yet accessible. 
        You specialize in:
        1. "Pitfall Avoidance" in design reviews.
        2. Interpretation of Chinese GB standards (Information Facilities, BA, Security, etc.).
        3. BIM digital delivery and AI trends in architecture.
        
        Answer questions concisely. If asked about specific codes (like GB50314), explain the intent behind the code.
        Adopt a "Deep Blue" and professional tone.`,
        temperature: 0.7,
      },
    });

    return response.text || "I apologize, I could not generate a response at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "System Error: Unable to connect to the Intelligence Architect Knowledge Base.";
  }
};
