import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';


@Component({
  selector: 'app-data-add',
  templateUrl: './data-add.component.html',
  styleUrls: ['./data-add.component.css']
})
export class DataAddComponent implements OnInit {
 

users = ["Gina Williams", "Jake Williams", "Jamie John", "John Doe","Jeff Stewart","Paula M. Keith"];

mentionConfig = {
            items : this.users,
            triggerChar: "@",
            allowSpace : true,
            mentionSelect : this.withoutTrigger,
            
        }

  constructor() {
 }
  
   ngOnInit(): void {
  }
  
 withoutTrigger(obj){
    // console.log(obj);
    var val : string = obj.label;
    return val + " ";
  }

  defaultValue : string = '';
  clear(){
    this.defaultValue='';
  }
}
