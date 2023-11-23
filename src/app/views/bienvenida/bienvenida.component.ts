import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsocketService } from '../../websocket.service';

@Component({
  selector: 'app-bienvenida',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bienvenida.component.html',
  styleUrl: './bienvenida.component.css'
})
export class BienvenidaComponent {
  message: string = 'XDDDDDDDDDDDDD';
  receivedMessages: string[] = [];

  constructor(private webSocketService: WebsocketService) {
    
  }

  ngOnInit(): void {
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
