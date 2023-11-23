import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PieceraComponent } from './componentes/piecera/piecera.component';
import { AppBarComponent } from './componentes/app-bar/app-bar.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
     RouterOutlet,
     PieceraComponent,
     AppBarComponent,
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AVR';
    constructor() {
    }

}


