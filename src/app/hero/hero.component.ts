import { Component, OnInit } from '@angular/core';

export type Hero = {
  img: string,
  nome: string,
  texto: string
}

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  harley: Hero = {
    img: "",
    nome: "Harley",
    texto: "Texto"
  }
   herois: Hero[] = [
    {
      img: "src\assets\aamon.jpg",
      nome: "Aamon",
      texto: "Texto"
    },
    {
      img: "",
      nome: "Lesley",
      texto: "Texto"
    }
   ]

  constructor() { }

  ngOnInit(): void {
  }

}
