import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
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
import {UploadImageComponent} from "./components/upload-image/upload-image.component";
import {LoginComponent} from "./components/login/login.component";
import {LogoutComponent} from "./components/logout/logout.component";
import {AuthGuardService} from "./service/auth-guard.service";

const routes: Routes = [
  {path: 'books', component: BookListComponent, canActivate: [AuthGuardService]},
  {path: 'book-add', component: BookComponent, canActivate: [AuthGuardService]},
  {path: 'book-edit/:id', component: BookEditComponent, canActivate: [AuthGuardService]},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'authors', component: AuthorListComponent, canActivate: [AuthGuardService]},
  {path: 'author-edit/:id', component: AuthorEditComponent, canActivate: [AuthGuardService]},
  {path: 'create-author', component: AuthorCreateComponent, canActivate: [AuthGuardService]},
  {path: 'categories', component: CategoriesListComponent, canActivate: [AuthGuardService]},
  {path: 'category-edit/:id', component: CategoryEditComponent, canActivate: [AuthGuardService]},
  {path: 'category-create', component: CategoryCreateComponent, canActivate: [AuthGuardService]},
  {path: 'upload-image', component: UploadImageComponent, canActivate: [AuthGuardService]},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
