import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { BookData } from './book/bookData';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private readonly apiUrl = 'http://localhost:4848';
  book: any;

  constructor(private http: HttpClient) { }

  getBooks(){
    return this.http.get(`${this.apiUrl}/book/all`);
  }

  saveBooks(book: BookData){
    console.log(book);
    return this.http.post(`${this.apiUrl}/book/save`, book);
  }
}
