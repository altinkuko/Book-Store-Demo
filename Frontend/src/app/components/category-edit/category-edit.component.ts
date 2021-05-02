import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Category} from '../../models/category';
import {CategoriesService} from '../../service/categories.service';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {

  category: Category = new Category();
  formGroup: FormGroup;
  id: number;

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private categoriesService: CategoriesService) {
    this.formGroup = this.formBuilder.group({
      categoryId: this.category.categoryId,
      name: this.category.name
    });
  }


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.categoriesService.findById(this.id).subscribe(
      category => {
        this.formGroup.patchValue(category);
      },
      error => console.log(error)
    );
  }

  onUpdate() {
    this.categoriesService.update(this.formGroup.value).subscribe(
      category => {
        this.router.navigate(['/categories']);
      }
    );
  }

  onDelete() {
    this.categoriesService.remove(this.id).subscribe(data => {
        this.router.navigate(['/categories']);
      }
    );
  }

}
