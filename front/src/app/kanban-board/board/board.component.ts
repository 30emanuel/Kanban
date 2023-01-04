import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormComponent } from '../form/form.component';
import { KanbanService } from '../kanban.service';
import { Card } from '../models/card.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  cards: Card[] = []

  constructor(
    private kanbanService: KanbanService,
    public dialog: MatDialog,
    ) { }

  ngOnInit(): void {
    this.onRefresh()
  }

  onRefresh(){
    this.kanbanService.getCards().subscribe(
      res => this.cards = res
    )
  }

  newCard(){
    let card: Card = {
      title: "",
      color: "",
      list: []
    }
    const dialogRef = this.dialog.open(FormComponent, {
      data: {title: card.title, color: card.color}
    })

    dialogRef.afterClosed().subscribe(
    (result: any) => {
      if(result){
        card.title = result.title
        card.color = result.color
        this.kanbanService.createCard(card).subscribe(
          (res: any) => this.cards.push(res)
        )
      }
    }
    )
  }

  deleteCard(card: Card, i: number){
    this.cards.splice(i)
    this.kanbanService.deleteCard(card.id).subscribe()
  }

}
