import { Component } from '@angular/core';
import { ChatgptService } from '../../../core/services/chatgpt.service';
import { FormsModule } from '@angular/forms';  // Importa FormsModule

@Component({
  selector: 'app-chatgpt',
  imports: [FormsModule],
  templateUrl: './chatgpt.component.html',
  styleUrl: './chatgpt.component.css'
})
export class ChatgptComponent {
  userMessage: string = '';
  botResponse: string = '';
  loading: boolean = false;

  constructor(private chatgptService: ChatgptService) {}

  async sendMessage() {
    if (this.userMessage.trim()) {
      this.loading = true;
      try {
        this.botResponse = await this.chatgptService.getResponse(this.userMessage);
      } catch (error) {
        this.botResponse = 'Error al obtener la respuesta del chatbot.';
      } finally {
        this.loading = false;
      }
    }
  }
}