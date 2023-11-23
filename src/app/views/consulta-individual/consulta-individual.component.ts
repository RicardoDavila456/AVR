import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsocketService } from '../../websocket.service';

@Component({
  selector: 'app-consulta-individual',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './consulta-individual.component.html',
  styleUrl: './consulta-individual.component.css'
})
export class ConsultaIndividualComponent {
  message: string = 'mensaje recibido';
  receivedMessages: any[] = [];

  constructor(private webSocketService: WebsocketService) {
    
  }

  ngOnInit(): void {
    this.webSocketService;
    // Suscríbete a los mensajes recibidos
    this.webSocketService.getMessage().subscribe((message: any) => {
      this.receivedMessages.push(message);
      console.log(this.receivedMessages.length);});
  }
  
  recibir(){
    this.webSocketService;
    // Suscríbete a los mensajes recibidos
    this.webSocketService.getMessage().subscribe((message: any) => {
      this.receivedMessages.push(message);
      console.log(message);});
  }
  
  
  sendMessage(): void {
    this.webSocketService.sendMessage(this.message);
  }
}
