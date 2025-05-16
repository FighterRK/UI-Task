import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  products = [
  {
    image: 'bag.png',
    title: 'Allen Solly',
    description: 'US Polo',
    currentPrice: 1000,
    reducedPrice: 1500
  },
  {
    image: 'jeans.jpg',
    title: 'Levis',
    description: 'Classic Jeans',
    currentPrice: 2000,
    reducedPrice: 2500
  },
  {
    image: 'nike.avif',
    title: 'Nike',
    description: 'Sports Shoes',
    currentPrice: 3000,
    reducedPrice: 3500
  },
  {
    image: 'ads.avif',
    title: 'Adidas',
    description: 'Running Shoes',
    currentPrice: 4000,
    reducedPrice: 4500
  },
  {
    image: 'puma.jpg',
    title: 'Puma',
    description: 'Casual Shoes',
    currentPrice: 1500,
    reducedPrice: 2000
  },
  {
    image: 'rbk.jpg',
    title: 'Reebok',
    description: 'Training Shoes',
    currentPrice: 1800,
    reducedPrice: 2200
  },
  {
    image: 'Gucci.webp',
    title: 'Gucci',
    description: 'Designer Bag',
    currentPrice: 5000,
    reducedPrice: 6000
  },
  {
    image: 'zara.webp',
    title: 'Zara',
    description: 'Handbag',
    currentPrice: 2500,
    reducedPrice: 3000
  },
  {
    image: 'lv.webp',
    title: 'Louis Vuitton',
    description: 'Luxury Bag',
    currentPrice: 10000,
    reducedPrice: 12000
  }
];


}
