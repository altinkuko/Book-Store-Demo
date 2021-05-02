import {Component, OnInit} from '@angular/core';
import {AuthorService} from '../../service/author.service';
import {Author} from '../../models/author';
import {Router} from '@angular/router';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {
  authors: Author[];
  loading = true;
  currentPage = 1;
  totalElements;
  numberOfElements;
  size = 4;
  sortKey = 'name';
  reverse = false;
  errorMsg;

  constructor(private authorService: AuthorService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getAuthors();
  }

  getAuthors() {
    this.authorService.getAuthors(this.currentPage - 1, this.size, this.sortKey)
      .subscribe(
        data => {
          this.authors = data.content;
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
    this.getAuthors();
  }

  update(id: number) {
    this.router.navigate(['/author-edit', id]);
  }

  create() {
    this.router.navigate(['create-author']);
  }

}
