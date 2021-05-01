import {Injectable} from '@angular/core';
import {Category} from '../models/category';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

const getAllUrl = 'http://localhost:8080/admin/categories';
const editUrl = 'http://localhost:8080/admin/category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  categories: Category[];

  constructor(private http: HttpClient) {
  }

  errorHandler(error: HttpErrorResponse) {
    console.log('Book api error', error);
    return throwError(error);
  }

  getCategories(page, size, sort): Observable<any> {
    return this.http.get<Category[]>(`${getAllUrl}`,
      {
        params: {
          page,
          size,
          sort
        }
      })
      .pipe(catchError(this.errorHandler));
  }

  public findById(id: number): Observable<Category> {
    return this.http.get<Category>(`${editUrl}/${id}`);
  }

  public remove(id: number) {
    return this.http.delete(`${editUrl}/${id}`);
  }

  public create(category: Category): Observable<Category>{
    return this.http.post<any>(`${editUrl}`, category);
  }

  public update(category: Category): Observable<Category> {
    return this.http.put<Category>(`${editUrl}`, category);
  }


}

