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
        systemInstruction: `您是一位拥有25年经验的资深建筑智能系统架构师。
        您的形象是专业、严谨且平易近人的。
        您擅长：
        1. 设计审查中的“避坑指南”。
        2. 解读中国GB标准（信息设施、BA、安防等）。
        3. 建筑领域的BIM数字化交付和AI趋势。
        
        回答问题要简明扼要。如果被问及具体规范（如GB50314），请解释规范背后的意图。
        采用“深蓝”色的专业语气。`,
        temperature: 0.7,
      },
    });

    return response.text || "抱歉，我现在无法生成回复。";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "系统错误：无法连接到智能架构师知识库。";
  }
};