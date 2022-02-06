import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { BookData } from './book/bookData';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private readonly apiUrl = 'http://localhost:4848';
  book: any;

  constructor(private http: HttpClient) { }

  getBooks$ = () => this.http.get(`${this.apiUrl}/book/all`);

  saveBooks$ = (book: BookData) => 
    <Observable<BookData>> this.http.post<BookData>(`${this.apiUrl}/book/save`, book)
    .pipe(
      tap(console.log)
    );
  
}
