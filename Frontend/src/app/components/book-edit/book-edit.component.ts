import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {BookService} from '../../service/book.service';
import {Book} from '../../models/book';
import {ActivatedRoute, Router} from '@angular/router';
import {Author} from '../../models/author';
import {AuthorService} from '../../service/author.service';
import {Category} from '../../models/category';
import {CategoriesService} from '../../service/categories.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {

  book: Book = new Book();
  formGroup: FormGroup;
  id: number;
  authors: Author[];
  categories: Category[];
  selectedCategories: Category[] = new Array<Category>();
  selectedFiles?: FileList;


  constructor(private bookService: BookService,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private authorService: AuthorService,
              private categoriesService: CategoriesService) {
    this.formGroup = formBuilder.group(
      {
        bookId: this.book.bookId,
        title: this.book.title,
        description: this.book.description,
        authorEntity: this.book.authorEntity,
        categories: this.book.categories,
        imgUrl: this.book.imgUrl
      }
    );
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;

    this.bookService.findById(this.id).subscribe(
      data => {
        this.formGroup.patchValue(data);
      }, error => console.log(error)
    );
    this.getAuthors();
    this.getAllCategories();
  }

  onSubmit() {
    this.bookService.update(this.formGroup.value).subscribe(data => {
      this.router.navigate(['/books']);
    });
  }
  onDelete(){
    this.bookService.remove(this.id).subscribe(data => {
      this.router.navigate(['/books']);
    });
  }
  changeAuthor(author: Author) {
  }

  getAllCategories() {
    this.categoriesService.getCategories(0, 5, name)
      .subscribe(
        data => {
          this.categories = data.content;
          console.log(data);
        });
  }

  getAuthors() {
    this.authorService.getAuthors(0, 5, name)
      .subscribe(
        data => {
          this.authors = data.content;
          console.log(data);
        });
  }
  getCategory(e: any, category: Category) {
    if (e.target.checked){
      this.selectedCategories.push(category);
    }else {
      this.selectedCategories = this.selectedCategories.filter(m => m !== category);
    }
    this.formGroup.value.categories = this.selectedCategories;
    console.log(this.formGroup.value);
  }
  selectFile(event: any) {
    this.selectedFiles = event.target.files;
    this.formGroup.patchValue({"imgUrl": 'http://localhost:8080/admin/files/' + `${this.selectedFiles.item(0).name}`});
    console.log(this.formGroup.value);
  }
}
