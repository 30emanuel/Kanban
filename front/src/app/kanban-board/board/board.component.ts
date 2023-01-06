import { CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormCardComponent } from '../form-card/form-card.component';
import { FormTaskComponent } from '../form-task/form-task.component';
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
    const dialogRef = this.dialog.open(FormCardComponent)

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

  createTask(card: Card){
    let newTask: string
    const dialogRef = this.dialog.open(FormTaskComponent)

    dialogRef.afterClosed().subscribe(result => {
        if(result){
          newTask = result
          card.list.push(newTask)
          this.kanbanService.update(card).subscribe()
        }
    })
  }

  deleteTask(card: Card, i: number){
    card.list.splice(i, 1)
    this.kanbanService.update(card).subscribe()
  }

  drop(event: CdkDragDrop<string[]>){
    let cardMoved = parseInt(event.container.id.replace(/\D/g, ''))
    let currentCard = parseInt(event.previousContainer.id.replace(/\D/g, ''))
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex)
      this.kanbanService.update(this.cards[currentCard]).subscribe()
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex)
       this.kanbanService.update(this.cards[currentCard]).subscribe()
       this.kanbanService.update(this.cards[cardMoved]).subscribe()
    }
  }
}
