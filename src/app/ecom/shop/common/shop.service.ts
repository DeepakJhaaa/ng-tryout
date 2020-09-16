import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface Todos {
  completed: boolean;
  Task: string;
}

@Injectable()
export class ShoppingService {
  baseUrl = '../../../assets/shop-assets/data/';

  constructor(private httpClient: HttpClient) {}

  // Get the all Products List
  getProducts() {
    return this.httpClient.get(this.baseUrl + 'products.json');
  }

  // Get the all Products List
  getFilters() {
    return this.httpClient.get(this.baseUrl + 'filters.json');
  }

  // Get the all Products List
  getProductsInCart() {
    return this.httpClient.get(this.baseUrl + 'cart.json');
  }

  // Update the current Todo
  updateTodos() {}

  // Create a New Todo Item
  newTodo(TodoObj) {
    // Create Todo object, that need to post to API Server.
    const newTodoObj: any = {};
    newTodoObj.task = TodoObj;
    newTodoObj.completed = false;

    // Get the List of All the todos from API Server.
    return this.httpClient.post(this.baseUrl + 'newTodo', newTodoObj);
  }

  // Delete the Current Todo
  deleteTodo() {}
}
