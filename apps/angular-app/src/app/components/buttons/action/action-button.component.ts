import { NgSwitch, NgSwitchCase, TitleCasePipe } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mfee-project-action-button',
  standalone: true,
  imports: [NgSwitch, NgSwitchCase, TitleCasePipe],
  templateUrl: './action-button.component.html',
  styleUrl: './action-button.component.scss'
})
export class ActionButtonComponent {
  @Input() buttonType: 'edit' | 'remove' | 'add' | 'positive' | 'negative' = 'add';
  @Input() label: string = '';
  @Input() isDisabled: boolean = false;

  @Output() buttonClick = new EventEmitter<void>();

  onClick(): void {
    if (!this.isDisabled) {
      this.buttonClick.emit();
    }
  }
}
