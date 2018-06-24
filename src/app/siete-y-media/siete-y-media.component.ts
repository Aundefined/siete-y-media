import { Component, OnInit } from '@angular/core';

import { MazoService } from '../_servicios/mazo.service';

import { Cartas } from '../_modelos/cartas';


@Component({
  selector: 'app-siete-y-media',
  templateUrl: './siete-y-media.component.html',
  styleUrls: ['./siete-y-media.component.css']
})
export class SieteYMediaComponent implements OnInit {

  Mazo:Cartas[];

  constructor(private mazoService:MazoService) { 
    this.Mazo = this.mazoService.getMazo();
  }

  ngOnInit() {
    this.mazoService.shuffle(this.Mazo);
  }



  

}
