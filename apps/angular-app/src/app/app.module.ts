import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/layout/header/header.component';
import { CategoriesListComponent } from './views/categories-list/categories-list.component';
import { CategoriesComponent } from './views/categories/categories.component';
import { ActionButtonComponent } from './components/buttons/action/action-button.component';
import { PopupComponent } from './components/popup/popup.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    HttpClientModule,
    AppComponent,
    HeaderComponent,
    CategoriesListComponent,
    CategoriesComponent,
    ActionButtonComponent,
    PopupComponent
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {}
