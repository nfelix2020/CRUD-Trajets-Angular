import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {  Trajet } from '../trajet';
import { TrajetService } from '../trajet.service';

@Component({
  selector: 'app-traject',
  templateUrl: './traject.component.html',
  styleUrls: ['./traject.component.css']
})
export class TrajectComponent implements OnInit {
  // public traj:Trajet={

  //   id:null,
  //   nom:'',
  //   email:'',
  //   phone:'',
  //   depart:'',
  //   destination:'',
  //   prix:0
  //   }
  traj: Trajet= new Trajet();
 allTrajects: Trajet[]=[];

  constructor(private trajetService: TrajetService, private router: Router) { }

  ngOnInit(): void {

  }

  onSubmit(form: NgForm){
    //console.log(form.value);
    let traj: Trajet={
    id:form.value.id,
    nom:form.value.nom,
    email:form.value.email,
    phone:form.value.phone,
    depart:form.value.depart,
    destination:form.value.destination,
    prix:form.value.prix
    }
     this.addTraject(traj);


  }

  // onSubmit(form: NgForm){
  //   console.log(form.value);

  //   this.router.navigateByUrl('');

  // }

  // public updateTraject(trajet: Trajet){
  //   let newtraject:Trajet =
  //   {
  //   id:trajet.id,
  //   nom:trajet.nom,
  //   email:trajet.email,
  //   phone:trajet.phone,
  //   depart:trajet.depart,
  //   destination:trajet.destination,
  //   prix:trajet.prix
  //   }
  //   this.trajetService.editTraject(trajet).subscribe((traj)=>{
  //         console.log("Traject updated: ", traj);
  //   });
  // }


  public addTraject(traject){
    this.trajetService.createTraject(traject).subscribe(tr=>{
          console.log("trajet published: ", tr);
          this.router.navigateByUrl('');
    });

}

}
