import { Component, OnInit } from '@angular/core';

export type Hero = {
  img: string,
  nome: string,
  texto: string,
  id: number,
  parentes?: number[]
}

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  heroiSelecionado: Hero;

  parentesHeroiSelecionado: Hero[];

   herois: Hero[] = [
    {
      img: "./assets/aamon.jpg",
      nome: "Aamon",
      texto: "Texto",
      id: 1,
      parentes: [5]
    },
    {
      img: "./assets/Lesley.jpg",
      nome: "Lesley",
      texto: "Lesley cresceu na casa de Vance, onde seu pai presidiu a segurança da família nobre. Durante um ataque de uma família rival, o pai de Lesley foi morto. Quando os assaltantes se aproximaram da casa de Vance, Lesley pegou o longo rifle preto de seu pai e cumpriu a missão de seu falecido pai.",
      id: 2,
      parentes: [1, 3, 4, 5]
    },
    {
      img: "./assets/harley.jpg",
      nome: "Harley",
      texto: "Texto",
      id: 3
    },
    {
      img: "./assets/gusion.jpg",
      nome: "Gusion",
      texto: "Texto",
      id: 4
    },
    {
      img: "./assets/fredrinn.jpg",
      nome: "Fredrinn",
      texto: "Texto",
      id: 5
    },
   ]

  constructor() { }

  ngOnInit(): void {
    this.selecionarHeroi(2);
  }

  selecionarHeroi(id: number){
    this.heroiSelecionado = this.herois.find(item => item.id == id  );
    if(!this.heroiSelecionado.parentes){
      this.parentesHeroiSelecionado = [];
    } else{
      this.parentesHeroiSelecionado = this.herois.filter(heroi => this.heroiSelecionado.parentes.includes(heroi.id));
    }
  }
}
