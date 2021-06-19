import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atendimento-page',
  templateUrl: './atendimento-page.component.html',
  styleUrls: ['./atendimento-page.component.css']
})
export class AtendimentoPageComponent implements OnInit {
  public logoUrl='terreiro_n.jpg';
  public titulo='Casa De Caridade Caboclo Pena Branca e Velho Nagô';
  public descricao='É uma casa de caridade auxiliando, apoiando e direcionando espiritualmente, vivemos em prol daqueles que sempre necessitam dac caridade';


  constructor() { }

  ngOnInit(): void {
  }

}
