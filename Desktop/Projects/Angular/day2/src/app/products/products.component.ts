import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Icateogry } from '../icateogry';
import { Iproduct } from '../iproduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit,OnChanges {
 @Input() selectCatID: number = 0 ; 
   itemlist:Iproduct[];
   prdFilterCat: Iproduct[] = []
  constructor() {
    this.itemlist = [
      //labtops
      { name: "Hp", price: 125, category: 1, quantity: 4, imgurl: "./assets/productimg/labtops/labtop (1).jpg" },
      { name: "lenovo", price: 300, category: 1, quantity: 2, imgurl: "./assets/productimg/labtops/labtop (2).jpg"},
      { name: "MSI", price: 150, category: 1, quantity: 0, imgurl: "./assets/productimg/labtops/labtop (4).jpg"},
      { name: "lenovo", price: 44, category: 1, quantity: 1, imgurl: "./assets/productimg/labtops/labtop (3).jpg"},
      { name: "beats", price: 30, category: 3, quantity: 5, imgurl: "./assets/productimg/headphones/headphone (1).jpeg" },
      { name: "HQ", price: 50, category: 3, quantity: 0, imgurl: "./assets/productimg/headphones/headphone (2).jpg" },
      { name: "Sound", price: 50, category: 3, quantity: 1, imgurl: "./assets/productimg/headphones/headphone (3).jpg" },
      { name: "Oppo", price: 60, category: 3, quantity: 2, imgurl: "./assets/productimg/headphones/headphone (4).jpg" },
      { name: "Appel", price: 44, category: 3, quantity: 4, imgurl: "./assets/productimg/headphones/headphone (5).jpg" },
      { name: "Appel", price: 44, category: 3, quantity: 4, imgurl: "./assets/productimg/headphones/headphone (1).jpeg" },
      { name: "Glass", price: 44, category: 2, quantity: 4, imgurl: "https://via.placeholder.com/150" },
      { name: "Reban", price: 44, category: 2, quantity: 4, imgurl: "https://via.placeholder.com/150" },
      //tablets
      { name: "TabS", price: 400, category: 5, quantity: 15, imgurl: "./assets/productimg/tablets/tablet (4).jpg" },
      { name: "Ipad", price: 325, category: 5, quantity: 4, imgurl: "./assets/productimg/tablets/tablet (1).jpg" },
      { name: "TabA", price: 300, category: 5, quantity: 1, imgurl: "./assets/productimg/tablets/tablet (2).jpg" },
      { name: "Samsung tabS", price: 250, category: 5, quantity: 0, imgurl: "./assets/productimg/tablets/tablet (3).jpg" },

    ]

  }
  
  ngOnChanges(): void {
    this.filterCatID()
    
}

  filterCatID(){
    if( this.selectCatID == 0 ){
      console.log("zeroooooooooo")
      this.prdFilterCat = this.itemlist
    }else{
      this.prdFilterCat = this.itemlist.filter(prd => prd.category == this.selectCatID)
    }

   
  }
  ngOnInit(): void {
  }

}
