import { Component, OnInit } from '@angular/core';

export type Hero = {
  img: string,
  nome: string,
  texto: string,
  id: number
}

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  heroiSelecionado: Hero;

   herois: Hero[] = [
    {
      img: "./assets/aamon.jpg",
      nome: "Aamon",
      texto: "Texto",
      id: 1
    },
    {
      img: "./assets/Lesley.jpg",
      nome: "Lesley",
      texto: "Lesley cresceu na casa de Vance, onde seu pai presidiu a segurança da família nobre. Durante um ataque de uma família rival, o pai de Lesley foi morto. Quando os assaltantes se aproximaram da casa de Vance, Lesley pegou o longo rifle preto de seu pai e cumpriu a missão de seu falecido pai.",
      id: 2
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
    this.heroiSelecionado = this.herois.find(item => item.id == 2  );
  }

  selecionarHeroi(id: number){
    console.log(this.heroiSelecionado);
    this.heroiSelecionado = this.herois.find(item => item.id == id  );
  }
}
