import { GoogleGenAI, Type } from "@google/genai";
import { InsightResponse } from "../types";

// Initialize the API client
// Note: process.env.API_KEY is expected to be available in the environment
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateWorkflowInsight = async (): Promise<InsightResponse> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: "Generate a short, futuristic, and actionable single-sentence tip about 'optimizing business workflows' or 'the future of SaaS'. Also categorize it into one word like 'Automation', 'Strategy', or 'Tech'.",
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            insight: {
              type: Type.STRING,
              description: "The short workflow tip or insight.",
            },
            category: {
              type: Type.STRING,
              description: "A one-word category for the insight.",
            },
          },
          required: ["insight", "category"],
        },
      },
    });

    const text = response.text;
    if (!text) {
        throw new Error("No response generated");
    }
    
    return JSON.parse(text) as InsightResponse;
  } catch (error) {
    console.error("Error generating insight:", error);
    // Fallback in case of API error or quota limits
    return {
      insight: "Automation is not about replacing people, but empowering them to do what they do best.",
      category: "Philosophy"
    };
  }
};