import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/layout/header/header.component';

@Component({
  selector: 'mfee-project-categories',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CategoriesComponent {
  
}
