import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styles: [
  ]
})
export class DataBindingComponent{
  public clickCount: number = 0;
  public imageUrl: string = "../assets/angular.png";
  public name: string = "";

  addClick(){
    this.clickCount++;
  }

  resetClickCount(){
    this.clickCount = 0;
  }

  keyUp(event:any){
    this.name = event.target.value;
  }
}
