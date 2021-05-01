import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Category} from '../../models/category';
import {CategoriesService} from '../../service/categories.service';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {
  categories: Category[];
  loading = true;
  currentPage = 1;
  totalElements;
  numberOfElements;
  size = 4;
  sortKey = 'name';
  reverse = false;
  errorMsg;

  constructor(private categoriesService: CategoriesService, private router: Router) {
  }

  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories() {
    this.categoriesService.getCategories(this.currentPage - 1, this.size, this.sortKey)
      .subscribe(
        data => {
          this.categories = data.content;
          this.totalElements = data.totalElements;
          this.size = data.size;
          this.numberOfElements = data.numberOfElements;
          this.loading = false;
          console.log(data);
        },
        error => this.errorMsg = error);
  }

  getPage(page: number) {
    this.loading = true;
    this.currentPage = page;
    this.getAllCategories();
  }

  sort(key: string) {
    this.loading = true;
    this.sortKey = key + ','.concat(this.reverse ? 'DESC' : 'ASC');
    this.reverse = !this.reverse;
    this.getAllCategories();
  }
  updateCategory(id: number) {
    this.router.navigate(['/category-edit', id]);
  }
  createCategory(){
    this.router.navigate(['/category-create']);
  }
}
