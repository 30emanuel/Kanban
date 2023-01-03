import { Component, OnInit } from '@angular/core';
import { KanbanService } from '../kanban.service';
import { Card } from '../models/card.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  cards: Card[] = []

  constructor(private kanbanService: KanbanService) { }

  ngOnInit(): void {
    this.kanbanService.getCards().subscribe(
      res => this.cards = res
    )
  }

}
