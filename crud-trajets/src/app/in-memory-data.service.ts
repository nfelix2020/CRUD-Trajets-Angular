import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb(){

    let  trajets =  [
      
      {
        id:1,
        nom:"Félix NSHIMIYIMANA",
        email:"nfelix2020@yahoo.com",
        phone:"+33753675586",
        depart:"Bruxelles",
        destination:"Paris",
        prix:25
  },
  {
        id:2,
        nom:"Eric WENGER",
        email:"ericwenger@yahoo.com",
        phone:"+32413675586",
        depart:"Nancy",
        destination:"Nantes",
        prix:32
  },
  {
        id:3,
        nom:"Peter OKOCH",
        email:"peterokoch@yahoo.com",
        phone:"+33458579630",
        depart:"Lille",
        destination:"Toulouse",
        prix:40
  }

     ];

     return {trajets};

  }

}
