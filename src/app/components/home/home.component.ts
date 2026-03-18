import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  slides: any[] = [];
  interval = 3000; // tiempo en ms
  pauseOnHover = true;

  ngOnInit(): void {
    this.getSlides();
  }

  getSlides() {
    this.slides = [
      {
        img: 'assets/img/Quéeslaingenieríacivil.png',
        title: 'Slide 1',
        text: 'Descripción del slide 1'
      },
      {
        img: 'assets/img/Ramasdelaingenieriacivil.jpg',
        title: 'Slide 2',
        text: 'Descripción del slide 2'
      },
      {
        img: 'assets/img/wed-048.jpg',
        title: 'Slide 3',
        text: 'Descripción del slide 3'
      }
    ];
  }

}
