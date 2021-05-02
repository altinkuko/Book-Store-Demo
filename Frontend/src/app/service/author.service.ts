import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Author} from '../models/author';
import {Book} from '../models/book';

const getAllUrl = 'http://localhost:8080/admin/authors';
const editUrl = 'http://localhost:8080/admin/author';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  private authors: Author[];

  constructor(private http: HttpClient) {
  }

  errorHandler(error: HttpErrorResponse) {
    console.log('Book api error', error);
    return throwError(error);
  }

  getAuthors(page, size, sort): Observable<any> {
    return this.http.get<Author[]>(`${getAllUrl}`,
      {
        params: {
          page,
          size,
          sort
        }
      })
      .pipe(catchError(this.errorHandler));
  }

  public findById(id: number): Observable<Author> {
    return this.http.get<Author>(`${editUrl}/${id}`);
  }

  public remove(id: number) {
    return this.http.delete(`${editUrl}/${id}`);
  }

  public create(author: Author): Observable<Author> {
    return this.http.post<Author>(`${editUrl}`, author);
  }

  public update(author: Author): Observable<Author> {
    return this.http.put<Author>(`${editUrl}`, author);
  }


}

