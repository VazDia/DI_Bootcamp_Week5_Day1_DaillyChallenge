import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Films } from '../models/film.model';
import { rejects } from 'assert';

@Injectable({
    //je mets ceci losque je souhaite que mon service soit accessible partout
    providedIn:'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  endPoint :string = 'https://swapi.dev/api/films/1/'

 async CallApi() : Promise<Films>{

    return new Promise((resolve, reject)=>{
        this.http.get(this.endPoint).subscribe((data:any)=>{

            let result:Films = {title:data.title, episode_id:data.episode_id,
                opening_crawl:data.opening_crawl,director:data.director, producer:data.producer,
                release_date:data.release_date
            }
            console.log(data);
            resolve(result)
            
        })
    })

  }
}


