import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ChatgptService {
  private apiUrl: string = 'https://api.openai.com/v1/chat/completions';
  private apiKey: string = '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'; // Reemplaza con tu clave API de OpenAI

  constructor() {}

  async getResponse(prompt: string) {
    try {
      const response = await axios.post(
        this.apiUrl,
        {
          model: 'gpt-4o', // o 'gpt-4', según lo que tengas acceso
          messages: [{ role: 'user', content: prompt }],
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${this.apiKey}`,
          },
        }
      );
      return response.data.choices[0].message.content;
    } catch (error) {
      console.error('Error en la API de OpenAI:', error);
      throw error;
    }
  }
}

