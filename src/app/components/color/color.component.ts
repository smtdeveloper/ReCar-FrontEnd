import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  color:Color[] =[];
  currentColor :Color;
  emptyColor:Color;
  constructor(private colorService:ColorService) { }

  ngOnInit(): void {
    this.getColor();
  }

  getColor(){
    this.colorService.getColors().subscribe(response => {
    this.color = response.data;
})
  }

  setCurrentColor(color:Color){

    this.currentColor = color;
  }

  getCurrentColorClass(color:Color){
    if(color == this.currentColor){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
   }


   getAllColorClass(){
    if(!this.currentColor){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
   }

   clearCurrentColor() {
    this.currentColor = this.emptyColor;
  }
  

}
