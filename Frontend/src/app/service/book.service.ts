import {Injectable} from '@angular/core';
import {Observable, of, throwError} from 'rxjs';
import {Book} from '../models/book';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError} from 'rxjs/operators';

const baseUrl = 'http://localhost:8080/admin/books';
const bookUrl = 'http://localhost:8080/admin/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: Book[];

  constructor(private http: HttpClient) {

  }

  errorHandler(error: HttpErrorResponse) {
    console.log('Book api error', error);
    return throwError(error);
  }


  getAllBooks(page, size, sort): Observable<any> {
    return this.http.get<Book[]>(`${baseUrl}`,
      {
        params: {
          page: page,
          size: size,
          sort: sort
        }
      })
      .pipe(catchError(this.errorHandler));
  }

  public findById(id: number): Observable<Book> {
    return this.http.get<Book>(`${bookUrl}/${id}`);
  }

  public remove(id: number) {
    return this.http.delete(`${bookUrl}/${id}`);
  }

  public create(book: Book): Observable<Book> {
    return this.http.post<Book>(`${bookUrl}`, book);
  }

  public update(book: Book): Observable<Book> {
    return this.http.put<Book>(`${bookUrl}`, book);
  }


}
