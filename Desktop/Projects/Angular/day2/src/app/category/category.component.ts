import { Component, OnInit } from '@angular/core';
import { Icateogry } from '../icateogry';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  selectedcatID: number = 0;
  catlist: Icateogry[];

  constructor() {
    this.catlist = [
      {id:0 , name:"All Category"},
      { id: 1, name: "labtop" },
      { id: 2, name: "Glass" },
      { id: 3, name: "Headphones" },
      { id: 4, name: "Mobile" },
      { id: 5, name: "Tablets" },]

   }


  ngOnInit(): void {
  }

}
