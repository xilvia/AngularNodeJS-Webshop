import { Injectable } from '@angular/core';
import { Order } from '../model/order';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  apiUrl: string = 'http://localhost:3210/orders';
  constructor(private http: HttpClient) { }

  getAll(): Observable<Order[]> {
    return this.http.get<Order[]>(this.apiUrl);
  }
  getSelectedOrder(id: number): Observable<any> {
    console.log(id);
    return this.http.get(`${this.apiUrl}/${id}`)
  }
  remove(id: number): Observable<Order> {

    return this.http.delete<Order>(`${this.apiUrl}/${id}`)
  }
  updateOrder(order: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${order.id}`, order, { responseType: 'text' })
  }
  addUser(order: Order): Observable<Order> {
    return this.http.post<Order>(this.apiUrl, order);
  }
}
