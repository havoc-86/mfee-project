import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './views/categories/categories.component';
import { CategoriesListComponent } from './views/categories-list/categories-list.component';

export const appRoutes: Routes = [
  { path: 'categories', component: CategoriesComponent },
  { path: 'categories-list', component: CategoriesListComponent },
  { path: 'login', component: CategoriesListComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
