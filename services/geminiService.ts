
import { GoogleGenAI } from "@google/genai";

if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable is not set.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generatePolicyIdea = async (topic: string): Promise<string> => {
    try {
        const systemInstruction = `You are a helpful policy analyst for the Youth Think Tank Forum of Bangladesh.
        Your goal is to generate a concise, innovative, and actionable policy idea based on the user's topic.
        The response should be structured and easy to read.
        Format your response in HTML. Use <h4> for titles, <p> for paragraphs, and <ul> with <li> for lists.
        The structure should be:
        1.  A catchy 'Policy Title'.
        2.  A 'Brief Summary' (2-3 sentences).
        3.  A list of 'Key Objectives'.
        4.  A list of 'Potential Stakeholders'.
        The tone must be optimistic, professional, and empowering for the youth of Bangladesh, with a strong nationalist perspective reflecting a nation-first approach.`;

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: `Generate a policy idea on the topic: "${topic}"`,
            config: {
                systemInstruction: systemInstruction,
                temperature: 0.7,
                topK: 40,
            }
        });

        return response.text;

    } catch (error) {
        console.error("Error generating content from Gemini API:", error);
        
        let errorMessage = "An unexpected error occurred while generating the policy idea.";
        if (error instanceof Error) {
            errorMessage = `API Error: ${error.message}`;
        }
        
        // Check for specific error types if the SDK provides them
        // For example, if it's a blocked prompt, provide a more specific message
        if (error.toString().includes('blocked')) {
             errorMessage = "The request was blocked due to safety concerns. Please try a different topic.";
        }
        
        throw new Error(errorMessage);
    }
};
