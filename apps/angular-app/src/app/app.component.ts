import { Component } from '@angular/core';
import { HeaderComponent } from './components/layout/header/header.component';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [HeaderComponent, RouterModule],
  selector: 'mfee-project-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}
