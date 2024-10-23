import { Component, OnInit } from '@angular/core';
import { Location } from '../../models/location.model';
import { DataService } from '../../services/data/data.service';
import { ActionButtonComponent } from '../../components/buttons/action/action-button.component';
import { NgFor, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'mfee-project-categories-list',
  standalone: true,
  imports: [TitleCasePipe, NgFor, ActionButtonComponent],
  templateUrl: './categories-list.component.html',
  styleUrl: './categories-list.component.scss'
})
export class CategoriesListComponent implements OnInit {
  locations: Location[] = [];
  isEditPopupOpen = false;
  isDeletePopupOpen = false;
  selectedLocation: Location | null = null;
  currentPage = 1;
  rowsPerPage = 5;
  totalLocations = this.locations.length;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getLocations().subscribe((locations) => {
      this.locations = locations;
    });
  }

  getLocations(): void {
    this.dataService.getLocations().subscribe((data: Location[]) => {
      this.locations = data;
    });
  }

  editLocation(location: Location) {
    this.dataService.updateLocation(location).subscribe((updatedLocation: Location) => {
      const index = this.locations.findIndex((loc) => loc.id === updatedLocation.id);

      if (index !== -1) {
        this.locations[index] = updatedLocation;
      }
    });
  }

  deleteLocation() {
    throw new Error('Method not implemented.');
  }

  // Pagination properties

  // Calculate the total number of pages
  get totalPages() {
    return Math.ceil(this.totalLocations / this.rowsPerPage);
  }

  // Get the categories for the current page
  get paginatedLocations() {
    const startIndex = (this.currentPage - 1) * this.rowsPerPage;
    const endIndex = startIndex + this.rowsPerPage;
    return this.locations.slice(startIndex, endIndex);
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

  openEditPopup(_t14: Location) {
    throw new Error(`Method not implemented. ${_t14}`);
  }
}
