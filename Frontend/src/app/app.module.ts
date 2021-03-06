import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BookComponent } from './components/book/book.component';
import { BookListComponent } from './components/book-list/book-list.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {NgxPaginationModule} from 'ngx-pagination';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { BookEditComponent } from './components/book-edit/book-edit.component';
import { AuthorListComponent } from './components/author-list/author-list.component';
import { AuthorEditComponent } from './components/author-edit/author-edit.component';
import { AuthorCreateComponent } from './components/author-create/author-create.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { CategoryCreateComponent } from './components/category-create/category-create.component';
import { CategoryEditComponent } from './components/category-edit/category-edit.component';
import { UploadImageComponent } from './components/upload-image/upload-image.component';
import { ButtonComponent } from './models/button/button.component';
import {LoginComponent} from "./components/login/login.component";
import {LogoutComponent} from "./components/logout/logout.component";
import {HttpInterceptorService} from "./service/http-interceptor.service";

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BookListComponent,
    NavigationBarComponent,
    BookEditComponent,
    AuthorListComponent,
    AuthorEditComponent,
    AuthorCreateComponent,
    CategoriesListComponent,
    CategoryCreateComponent,
    CategoryEditComponent,
    UploadImageComponent,
    ButtonComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi:true}],
  bootstrap: [AppComponent]

})
export class AppModule { }
