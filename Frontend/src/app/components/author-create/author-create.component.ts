import {Component, OnInit} from '@angular/core';
import {Author} from '../../models/author';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthorService} from '../../service/author.service';

@Component({
  selector: 'app-author-create',
  templateUrl: './author-create.component.html',
  styleUrls: ['./author-create.component.css']
})
export class AuthorCreateComponent implements OnInit {

  author: Author = new Author();
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private authorService: AuthorService) {
  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      name: this.author.name,
      bio: this.author.bio
    });
  }

  createAuthor() {
    this.authorService.create(this.formGroup.value).subscribe(
      () => {
        this.router.navigate(['/authors']);
      }
    );
  }

}
