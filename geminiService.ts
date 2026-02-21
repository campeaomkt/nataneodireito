
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function explainLegalTerm(term: string): Promise<string> {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Explique o conceito jurídico "${term}" de forma extremamente simples e didática para um calouro de direito que está começando agora. Seja breve, use no máximo 3 parágrafos.`,
      config: {
        systemInstruction: "Você é um professor de introdução ao direito experiente, conhecido por explicar termos complexos de forma muito simples e direta, sem 'juridiquês' desnecessário.",
        temperature: 0.7,
      },
    });
    return response.text || "Desculpe, não consegui processar essa explicação agora.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Ocorreu um erro ao buscar a explicação. Tente novamente em instantes.";
  }
}
