import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mfee-project-popup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {
  @Input() title: string = 'Default Title';
  @Input() showPopup: boolean = false;

  @Output() closePopup = new EventEmitter<void>();

  close() {
    this.showPopup = false;
    this.closePopup.emit();
  }
}
