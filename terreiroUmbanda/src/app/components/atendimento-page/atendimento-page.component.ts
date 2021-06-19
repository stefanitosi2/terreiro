import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atendimento-page',
  templateUrl: './atendimento-page.component.html',
  styleUrls: ['./atendimento-page.component.css']
})
export class AtendimentoPageComponent implements OnInit {
  public logoUrl='https://www.iquilibrio.com/blog/wp-content/uploads/2017/01/ogum-1-1150x716.jpg?crop';
  public titulo='Casa De Caridade Caboclo Pena Branca e Velho Nagô';
  public descricao='É uma casa de caridade auxiliando, apoiando e direcionando espiritualmente, vivemos em prol daqueles que sempre necessitam dac caridade';


  constructor() { }

  ngOnInit(): void {
  }

}
