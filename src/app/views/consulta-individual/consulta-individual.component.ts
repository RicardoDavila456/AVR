import {  Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsocketService } from '../../websocket.service';
import { json } from 'stream/consumers';

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
  recibido:boolean=false;
  ingredientes:any[] = []

  constructor(private webSocketService: WebsocketService) {
    
  }

  ngOnInit(): void {
    this.receivedMessages.push(JSON.parse(localStorage.getItem('RecetaActual') || '{}'));
    this.convertir();
    this.ingredientes=this.receivedMessages[0]["Recetas"];
    this.webSocketService;
    
  }

  convertir(){
    this.receivedMessages[0]["Ilustraciones"]=JSON.parse(this.receivedMessages[0]["Ilustraciones"])
    this.receivedMessages[0]["Plato"]=JSON.parse(this.receivedMessages[0]["Plato"])
    this.receivedMessages[0]["Recetas"]=JSON.parse(this.receivedMessages[0]["Recetas"])
  }
  
  recibir(){
    this.webSocketService;
    this.webSocketService.getMessage().subscribe((message: any) => {
      this.receivedMessages.push(message);
      console.log(message);});
  }
  
  
  sendMessage(): void {
    this.webSocketService.sendMessage(this.message);
  }
}
