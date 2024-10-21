import { Component, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mfee-project-action-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './action-button.component.html',
  styleUrl: './action-button.component.scss'
})
export class ActionButtonComponent {
  //emit event that button was clicked
btnGotClicked: EventEmitter<void> = new EventEmitter<void>();
}
