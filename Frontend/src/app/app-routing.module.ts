import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {BookListComponent} from './components/book-list/book-list.component';
import {BookEditComponent} from './components/book-edit/book-edit.component';
import {BookComponent} from './components/book/book.component';
import {AuthorListComponent} from './components/author-list/author-list.component';
import {AuthorEditComponent} from './components/author-edit/author-edit.component';
import {AuthorCreateComponent} from './components/author-create/author-create.component';
import {CategoriesListComponent} from './components/categories-list/categories-list.component';
import {CategoryEditComponent} from './components/category-edit/category-edit.component';
import {CategoryCreateComponent} from './components/category-create/category-create.component';

const routes: Routes = [
  { path: 'books', component: BookListComponent},
  {path: 'book-add', component: BookComponent},
  {path: 'book-edit/:id', component: BookEditComponent},
  {path: '', redirectTo: 'books', pathMatch: 'full'},
  {path: 'authors', component: AuthorListComponent},
  {path: 'author-edit/:id', component: AuthorEditComponent},
  {path: 'create-author', component: AuthorCreateComponent},
  {path: 'categories', component: CategoriesListComponent},
  {path: 'category-edit/:id', component: CategoryEditComponent},
  {path: 'category-create', component: CategoryCreateComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
