import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-form-task',
  templateUrl: './form-task.component.html',
  styleUrls: ['./form-task.component.css']
})
export class FormTaskComponent implements OnInit {

  data!: string

  constructor(
    public dialogRef: MatDialogRef<FormTaskComponent>,
    @Inject(MAT_DIALOG_DATA) data: string,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  
  ngOnInit(): void {
  }

}
