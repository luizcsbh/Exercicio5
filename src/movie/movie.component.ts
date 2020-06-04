import { Component } from "@angular/core";

interface IMovie {
  imgMovie: string;
  titleMovie: string;
  directorMovie: string;
  releaseDateMovie: string;
  descriptionMovie: string;
  durationMovie: string;
}

@Component({
  selector: "movie",
  templateUrl: "./movie.component.html",
  styleUrls: ["./movie.component.css"]
})
export class MovieComponent {
  movie: IMovie[] = [
    {
      imgMovie: "assets/img/parasita.png",
      titleMovie: "Parasita",
      directorMovie: "Bong Joon-ho",
      releaseDateMovie: "Nov 7 2019",
      descriptionMovie:
        "Toda a família de Ki-taek está desempregada, vivendo em um porão sujo e apertado, mas uma obra do acaso faz com que ele comece a dar aulas de inglês a uma garota de família rica. Fascinados com a vida luxuosa destas pessoas, pai, mãe e filhos bolam um plano para se infiltrarem também na família burguesa, um a um. No entanto, os segredos e mentiras necessários à ascensão social custam caro a todos.",
      durationMovie: "132 min"
    },
    {
      imgMovie: "assets/img/sonic.png",
      titleMovie: "Sonic: O Filme",
      directorMovie: "Jeff Fowler",
      releaseDateMovie: "Fev 13 2020",
      descriptionMovie:
        "Sonic, o porco-espinho azul mais famoso do mundo, se junta com os seus amigos para derrotar o terrível Doutor Eggman, um cientista louco que planeja dominar o mundo, e o Doutor Robotnik, responsável por aprisionar animais inocentes em robôs.",
      durationMovie: "100 min"
    },
    {
      imgMovie: "assets/img/bacurau.png",
      titleMovie: "Bacurau",
      directorMovie: "Kleber Mendonça Filho, Juliano Dornelles",
      releaseDateMovie: "Ago 23 2019",
      descriptionMovie:
        "Os moradores de um pequeno povoado do sertão brasileiro, chamado Bacurau, descobrem que a comunidade não consta mais em qualquer mapa. Aos poucos, percebem algo estranho na região: enquanto drones passeiam pelos céus, estrangeiros chegam à cidade. Quando carros se tornam vítimas de tiros e cadáveres começam a aparecer, Teresa, Domingas, Acácio, Plínio, Lunga e outros habitantes chegam à conclusão de que estão sendo atacados. Falta identificar o inimigo e criar coletivamente um meio de defesa.",
      durationMovie: "132 min"
    },
    {
      imgMovie: "assets/img/jumanji.png",
      titleMovie: "Jumanji: Proxima Fase",
      directorMovie: "Jake Kasdan",
      releaseDateMovie: "Dez 05 2019",
      descriptionMovie:
        "Spencer volta ao mundo fantástico de Jumanji. Os amigos Martha, Fridge e Bethany entram no jogo e tentam trazê-lo para casa. Mas eles logo descobrem mais obstáculos e perigos a serem superados.",
      durationMovie: "123 min"
    },
    {
      imgMovie: "assets/img/badboys.png",
      titleMovie: "Bad Boys para Sempre",
      directorMovie: "Bilall Fallah, Adil El Arbi",
      releaseDateMovie: "Jan 30 2020",
      descriptionMovie:
        "Os policiais Mike Lowery e Marcus Burnett se juntam para derrubar o líder de um cartel de drogas em Miami. A recém-criada equipe de elite do departamento de polícia de Miami, ao lado de Mike e Marcus, enfrenta o implacável Armando Armas.",
      durationMovie: "124 min"
    },
    {
      imgMovie: "assets/img/pulpfiction.png",
      titleMovie: "Pulp Fiction",
      directorMovie: "Quentin Tarantino",
      releaseDateMovie: "Fev 18 1995",
      descriptionMovie:
        "Os caminhos de vários criminosos se cruzam nestas três histórias de Quentin Tarantino. Um pistoleiro se apaixona pela mulher de seu chefe, um boxeador não se sai bem em uma luta e um casal tenta executar um plano de roubo que foge do controle.",
      durationMovie: "178 min"
    }
  ];
}
