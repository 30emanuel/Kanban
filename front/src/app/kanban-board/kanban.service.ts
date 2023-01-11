import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Card } from './models/card.model';

@Injectable({
  providedIn: 'root'
})
export class KanbanService {

  private apiUrl = 'http://localhost:3000/kanban'

  constructor(private http: HttpClient) { }

  getCards(){
    return this.http.get<Card[]>(this.apiUrl)
  }

  createCard(card: Card){
    return this.http.post(this.apiUrl, card)
  }

  deleteCard(id: any){
    return this.http.delete<Card>(`${this.apiUrl}/${id}`)
  }

  update(card: Card){
    return this.http.put<Card>(`${this.apiUrl}/${card.id}/`, card)
  }

}
