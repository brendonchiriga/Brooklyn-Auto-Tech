// Dynamic import wrapper to prevent load-time crashes
let aiInstance: any = null;

const getAiClient = async () => {
  if (!aiInstance) {
    try {
      // Dynamically import the library only when needed
      const { GoogleGenAI } = await import("@google/genai");
      
      const apiKey = process.env.API_KEY || '';
      aiInstance = new GoogleGenAI({ apiKey });
    } catch (error) {
      console.error("Failed to load GoogleGenAI library:", error);
      throw new Error("AI Service unavailable");
    }
  }
  return aiInstance;
};

const SYSTEM_INSTRUCTION = `
You are the virtual assistant for "Brooklyn Auto Tech" (also known as Brooklyn Auto Electronics), based in Harare, Zimbabwe.
Your name is "Brooklyn Bot".
Address: 67 Selous Ave, Harare.
Contact Technical: +263 774 944 694.
Contact Sales: +263 710 866 893.

Services offered:
- Car alarms and immobilisers installation.
- Reverse view systems (cameras and sensors).
- Dash cameras.
- Car radios and Android head units.
- Turbo timers.
- Vehicle tracker installation.
- Mobile service available within Zimbabwe by arrangement.

Key selling points:
- Neat wiring and correct fusing.
- Compatibility with vehicle systems.
- Adherence to manufacturer guidelines.
- Installation using customer-supplied parts or sourcing compatible systems on request.

Your goal is to be helpful, professional, and concise. Answer questions about services, location, and contact details.
If a user asks for a quote, give a rough estimate range if you know general market prices in USD, but ALWAYS state that they must call the Technical or Sales number for an exact quote.
Do not invent services not listed here.
`;

export const sendMessageToGemini = async (message: string, history: { role: string; parts: { text: string }[] }[]) => {
  try {
    const ai = await getAiClient();
    
    // Safety check in case initialization failed
    if (!ai) return "I'm currently offline. Please call us directly.";

    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history,
    });

    const result = await chat.sendMessage({ message });
    return result.text;
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "I'm having trouble connecting to the server right now. Please try again later or call us directly.";
  }
};