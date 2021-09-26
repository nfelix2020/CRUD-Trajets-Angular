import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
// import { TRAJETS } from './mock-trajets';
import { Trajet } from './trajet';

@Injectable({
  providedIn: 'root'
})
export class TrajetService {

  SERVER_URL: string = "http://localhost:8080/api/"

  /************************************* */
  //  lestrajets: Trajet[]=TRAJETS;

  // getTrajets():Observable<Trajet[]>{

  //   const trajets: Trajet[]=TRAJETS;

  //   return of(trajets);

  // }
/************************ */

trajetsUrl = 'api/trajets';  // URL to web api


constructor(private http: HttpClient) { }

// onAdd(trajet: Trajet){
//   this.lestrajets.push(trajet);
// }

// public getAllTrajects(){

//   return this.http.get(this.SERVER_URL+ 'trajets');

// }


getTrajects(): Observable<Trajet[]> {
  return this.http.get<Trajet[]>(this.trajetsUrl)
    .pipe(
      //catchError(this.handleError('getHeroes', []))
    );
}
public createTraject(traject: Trajet){
  return this.http.post(`${this.SERVER_URL + 'trajets'}`, traject);
}

public editTraject(trajet: Trajet){

  return this.http.put(`${this.SERVER_URL + 'trajets'}/${trajet.id}`, trajet)
}

public deleteTraject(trajectId : number){
  return this.http.delete(`${this.SERVER_URL + 'trajets'}/${trajectId}`)
}

public getTrajectById(trajectId : number){
  return this.http.get(`${this.SERVER_URL + 'trajets'}/${trajectId}`)
}

}
