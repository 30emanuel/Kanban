import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Card } from '../models/card.model';

@Component({
  selector: 'app-form',
  templateUrl: './form-card.component.html',
  styleUrls: ['./form-card.component.css']
})
export class FormCardComponent implements OnInit {
  
  data: Card = {
    title: "",
    color: "",
    list: []
  }

  constructor(
    public dialogRef: MatDialogRef<FormCardComponent>,
    @Inject(MAT_DIALOG_DATA) data: Card,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
 
  ngOnInit(): void {
  }



}
