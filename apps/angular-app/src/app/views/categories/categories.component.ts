import { Component, OnInit } from '@angular/core';
import { Location } from '../../models/location.model';
import { DataService } from '../../services/data/data.service';
import { JsonPipe, NgFor, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { ActionButtonComponent } from '../../components/buttons/action/action-button.component';
import { CheckImageUrlDirective } from '../../directives/checkImageUrl.directive';
import { PopupComponent } from '../../components/popup/popup.component';

@Component({
  selector: 'mfee-project-categories',
  standalone: true,
  imports: [TitleCasePipe, UpperCasePipe, JsonPipe, NgFor, CheckImageUrlDirective, ActionButtonComponent, PopupComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent implements OnInit {
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getLocations().subscribe((locations) => {
      this.locations = locations;
      this.categories = Array.from(this.getUniqueCategories(locations)).sort();
      this.categories.unshift('All');
    });
  }
  pageTitle: string = 'Discovering the world!';
  pageSubtitle: string = '[Making your life Easier!!]';
  activeFilters: string[] = [];
  categories: string[] = ['All', 'Lorem', 'Travel', 'Ek Balam', 'Food', 'Test', 'Otro'];
  locations: Location[] = [];
  isEditPopupOpen = false;
  isDeletePopupOpen = false;
  selectedLocation: Location | null = null;

  getUniqueCategories = (locations: Location[]): Set<string> => {
    return locations.reduce((categories: Set<string>, location: Location) => {
      categories.add(location.category);
      return categories;
    }, new Set<string>());
  };

  closeRemovePopup() {
    this.isDeletePopupOpen = false;
  }
  closeEditPopup() {
    this.isEditPopupOpen = false;
  }
  editLocation(location: Location) {
    this.isEditPopupOpen = true;
    console.log('Edit location', location);
  }
  deleteLocation(location: Location) {
    this.isDeletePopupOpen = true;
    console.log('Delete location', location);
  }
}
