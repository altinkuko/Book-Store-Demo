import {Component, OnInit, Optional} from '@angular/core';
import {BookService} from '../../service/book.service';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {Book} from '../../models/book';
import {Author} from '../../models/author';
import {AuthorService} from '../../service/author.service';
import {Category} from '../../models/category';
import {CategoriesService} from '../../service/categories.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  book: Book = new Book();
  formGroup: FormGroup;
  authors: Author[];
  categories: Category[];
  selectedCategories: Category[] = new Array<Category>();
  selectedFile: File = null;

  constructor(private bookService: BookService,
              private formBuilder: FormBuilder,
              private router: Router,
              private authorService: AuthorService,
              private categoriesService: CategoriesService,
              private http: HttpClient) {
  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      title: this.book.title,
      description: this.book.description,
      authorEntity: this.book.authorEntity,
      categories: this.selectedCategories,
      imgUrl: this.book.imgUrl
    });
    this.getAuthors();
    this.getAllCategories();
  }

  createBook() {
    this.bookService.create(this.formGroup.value).subscribe(
      () => {
        this.router.navigate(['/books']);
      }
    );
  }

  getAuthors() {
    this.authorService.getAuthors(0, 5, name)
      .subscribe(
        data => {
          this.authors = data.content;
          console.log(data);
        });
  }

  getAllCategories() {
    this.categoriesService.getCategories(0, 5, name)
      .subscribe(
        data => {
          this.categories = data.content;
          console.log(data);
        });
  }

  changeAuthor(author: Author) {
  }

  getCategory(e: any, category: Category) {
    if (e.target.checked) {
      this.selectedCategories.push(category);
    } else {
      this.selectedCategories = this.selectedCategories.filter(m => m !== category);
    }
    this.formGroup.value.categories = this.selectedCategories;
  }

  onImageSelected(event) {
    this.selectedFile = <File> event.target.files[0];
    console.log(this.formGroup.value);
  }
}
