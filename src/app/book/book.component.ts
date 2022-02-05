import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookService } from '../book.service';
import { BookData } from './bookData';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  private readonly apiUrl = 'http://localhost:4848';
  books: any;

  constructor(private service: BookService) { }

  ngOnInit(): void {
    this.books = this.service.getBooks().subscribe((data) => this.books = data);
  }

  saveBook(bookF: NgForm): void {
    console.log(bookF.value)
    this.service.saveBooks(bookF.value as BookData).subscribe();
  }

}
