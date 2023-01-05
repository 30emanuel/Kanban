import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BoardComponent } from './board/board.component';
import { KanbanBoardRoutingModule } from './kanban-routing';
import { KanbanService } from './kanban.service';
import { MaterialModule } from '../material/material.module';
import { FormCardComponent } from './form-card/form-card.component';
import { FormsModule } from '@angular/forms';
import { FormTaskComponent } from './form-task/form-task.component';



@NgModule({
  declarations: [
    BoardComponent,
    FormCardComponent,
    FormTaskComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    KanbanBoardRoutingModule,
    MaterialModule,
    FormsModule,
  ],
  providers: [KanbanService]
})
export class KanbanBoardModule { }
