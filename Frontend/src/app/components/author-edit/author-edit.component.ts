import {Component, OnInit} from '@angular/core';
import {Author} from '../../models/author';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthorService} from '../../service/author.service';

@Component({
  selector: 'app-author-edit',
  templateUrl: './author-edit.component.html',
  styleUrls: ['./author-edit.component.css']
})
export class AuthorEditComponent implements OnInit {

  author: Author = new Author();
  formGroup: FormGroup;
  id: number;

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private authorService: AuthorService) {
    this.formGroup = this.formBuilder.group({
      authorId: this.author.authorId,
      name: this.author.name,
      bio: this.author.bio
    });
  }


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.authorService.findById(this.id).subscribe(
      author => {
        this.formGroup.patchValue(author);
      },
      error => console.log(error)
    );
  }

  onUpdate() {
    this.authorService.update(this.formGroup.value).subscribe(
      author => {
        this.router.navigate(['/authors']);
      }
    );
  }

  onDelete() {
    this.authorService.remove(this.id).subscribe(data => {
        this.router.navigate(['/authors']);
      }
    );
  }

}
