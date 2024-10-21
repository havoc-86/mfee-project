import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'mfee-project-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  linksArr: { route: string, label: string }[] = [
    { route: '/categories', label: 'Categories' },
    { route: '/categories-list', label: 'Categories List' },
    { route: '/login', label: 'Login' },
  ];
}
