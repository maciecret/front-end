import { Component, OnInit, VERSION, ViewChild } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  mybreakpoint!: number;
  
  constructor(){}
  ngOnInit(): void {
    this.mybreakpoint = (window.innerWidth <= 500) ? 1 : 2;
      
  }

  
  
  handleSize(event: any) {
    this.mybreakpoint = (event.target.innerWidth <= 500) ? 1 : 2;
  }
}
