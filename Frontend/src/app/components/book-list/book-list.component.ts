import {Component, OnInit} from '@angular/core';
import {Book} from '../../models/book';
import {BookService} from '../../service/book.service';
import {Author} from '../../models/author';
import {Router} from '@angular/router';
import {Category} from '../../models/category';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[];
  author: Author;
  loading = true;
  currentPage = 1;
  totalElements;
  numberOfElements;
  size = 4;
  sortKey = 'title';
  reverse = false;
  errorMsg;
  category: Category;

  constructor(private bookService: BookService, private router: Router) {
  }

  ngOnInit(): void {
    this.getAllBooks();
  }

  getAllBooks() {
    this.bookService.getAllBooks(this.currentPage - 1, this.size, this.sortKey)
      .subscribe(
        data => {
          this.books = data.content;
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
    this.getAllBooks();
  }

  sort(key: string) {
    this.loading = true;
    this.sortKey = key + ','.concat(this.reverse ? 'DESC' : 'ASC');
    this.reverse = !this.reverse;
    this.getAllBooks();
  }
  updateBook(id: number) {
    this.router.navigate(['/book-edit', id]);
  }
  createBook(){
    this.router.navigate(['/book-add']);
  }
}
