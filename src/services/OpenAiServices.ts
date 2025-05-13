// OpenAIService.ts
// This file will handle the OpenAI API integration when you're ready to implement it

export interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

class OpenAIService {
  private apiKey: string;
  private apiEndpoint: string = 'https://api.openai.com/v1/chat/completions';
  
  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }
  
  async sendMessage(messages: ChatMessage[], options = { model: 'gpt-3.5-turbo' }): Promise<string> {
    try {
      const response = await fetch(this.apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`
        },
        body: JSON.stringify({
          model: options.model,
          messages: [
            // Add a system message to set the context for the AI
            { 
              role: 'system', 
              content: 'You are a helpful customer support assistant for a software licensing platform. Provide concise, friendly answers to customer questions. If you don\'t know the answer, suggest the customer contact support at support@company.com.'
            },
            ...messages
          ],
          max_tokens: 150,
          temperature: 0.7
        })
      });
      
      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }
      
      const data = await response.json();
      return data.choices[0].message.content;
    } catch (error) {
      console.error('Error calling OpenAI API:', error);
      return 'Sorry, I encountered an error. Please try again later or contact our support team.';
    }
  }
}

 
// const openAIService = new OpenAIService('your-api-key-here');
// 
// const handleSendMessage = async () => {
//   setMessages(prev => [...prev, { role: 'user', content: userInput }]);
//   
//   const messageHistory = messages.map(msg => ({
//     role: msg.type === 'user' ? 'user' : 'assistant', 
//     content: msg.text
//   }));
//   
//   const response = await openAIService.sendMessage([
//     ...messageHistory,
//     { role: 'user', content: userInput }
//   ]);
//   
//   setMessages(prev => [...prev, { type: 'bot', text: response }]);
// };

export default OpenAIService;