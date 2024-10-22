import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/layout/header/header.component';
import { ActionButtonComponent } from '../../components/buttons/action/action-button.component';

@Component({
  selector: 'mfee-project-categories-list',
  standalone: true,
  imports: [CommonModule, HeaderComponent, ActionButtonComponent],
  templateUrl: './categories-list.component.html',
  styleUrl: './categories-list.component.scss'
})
export class CategoriesListComponent {
  categories = [
    { title: 'test1', description: 'Oh Fortuna, Velut Luna' },
    { title: 'test2', description: 'Description 2' },
    { title: 'test3', description: 'Description 3' },
    { title: 'test4', description: 'Description 4' },
    { title: 'test5', description: 'Description 5' },
    { title: 'test6', description: 'Description 6' },
    { title: 'test7', description: 'Description 7' },
    { title: 'test8', description: 'Description 8' },
    { title: 'test4', description: 'Description 4' },
    { title: 'test5', description: 'Description 5' },
    { title: 'test6', description: 'Description 6' },
    { title: 'test7', description: 'Description 7' },
    { title: 'test8', description: 'Description 8' }
  ];
  editPost() {
    throw new Error('Method not implemented.');
  }
  deletePost() {
    throw new Error('Method not implemented.');
  }

  // Pagination properties
  currentPage = 1;
  rowsPerPage = 5;
  totalCategories = this.categories.length;

  // Calculate the total number of pages
  get totalPages() {
    return Math.ceil(this.totalCategories / this.rowsPerPage);
  }

  // Get the categories for the current page
  get paginatedCategories() {
    const startIndex = (this.currentPage - 1) * this.rowsPerPage;
    const endIndex = startIndex + this.rowsPerPage;
    return this.categories.slice(startIndex, endIndex);
  }

  // Go to the next page
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  // Go to the previous page
  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  // Go to a specific page
  goToPage(pageNumber: number) {
    if (pageNumber >= 1 && pageNumber <= this.totalPages) {
      this.currentPage = pageNumber;
    }
  }
}
