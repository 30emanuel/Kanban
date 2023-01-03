import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BoardComponent } from './board/board.component';
import { KanbanBoardRoutingModule } from './kanban-routing';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { KanbanService } from './kanban.service';



@NgModule({
  declarations: [
    BoardComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    KanbanBoardRoutingModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [KanbanService]
})
export class KanbanBoardModule { }
