import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsocketService } from '../../websocket.service';

@Component({
  selector: 'app-consulta-general',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './consulta-general.component.html',
  styleUrl: './consulta-general.component.css'
})
export class ConsultaGeneralComponent {
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
