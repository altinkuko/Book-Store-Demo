import {Component, OnInit} from '@angular/core';
import {Category} from '../../models/category';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {CategoriesService} from '../../service/categories.service';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {

  category: Category = new Category();
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private categoriesService: CategoriesService) {
  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      name: this.category.name
    });
  }

  createCategory() {
    this.categoriesService.create(this.formGroup.value).subscribe(
      category => {
        this.router.navigate(['/categories']);
      }
    );
  }

}
