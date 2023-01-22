import { Component,OnInit } from '@angular/core';
import { Films } from '../models/film.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private api:ApiService) {}

  film ? : Films;

  loading: boolean =false;

  //le chargement des donnees au chargement de la page accueil Home initialiser les attributs d'une classe
  
  ngOnInit(): void {
      this.api.CallApi().then((data)=>{
        this.film = data;
        this.loading =true;
      })
  }
}
