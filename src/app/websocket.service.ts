import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  private socket: WebSocket;
  private messageSubject: Subject<string> = new Subject<string>();

  constructor() {
    this.socket = new WebSocket('ws://localhost:8080');
    this.initializeWebSocket();
  }

  private initializeWebSocket(): void {
    this.connectWebSocket();
  }

  private connectWebSocket(): void {
    this.socket = new WebSocket('ws://localhost:8080');
    this.socket.addEventListener('open', (event) => {
      console.log('Conexión WebSocket abierta:', event);
    });

    this.socket.addEventListener('message', (event) => {
      const message = event.data;

      try {
        const parsedMessage = JSON.parse(message);
        console.log('JSON recibido:', parsedMessage);
        this.messageSubject.next(parsedMessage);
      } catch (error) {
        console.error('Error al analizar JSON:', error);
      }
    });

    this.socket.addEventListener('close', (event) => {
      console.log('Conexión WebSocket cerrada:', event);
      // Puedes implementar lógica de reconexión aquí si es necesario
    });
  }

  private reconnectWebSocket(): void {
    setTimeout(() => {
      this.connectWebSocket();
    }, 5000); // Intenta reconectar después de 5 segundos (ajusta según tus necesidades)
  }

  getMessage(): Observable<any> {
    return this.messageSubject.asObservable();
  }

  sendMessage(message: string): void {
    if (this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(message);
    } else {
      console.warn('La conexión WebSocket no está abierta.');
    }
  }

  ngOnDestroy(): void {
    if (this.socket) {
      this.socket.close();
    }
  }
}
