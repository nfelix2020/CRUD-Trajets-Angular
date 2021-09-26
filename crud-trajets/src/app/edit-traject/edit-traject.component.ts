import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Trajet } from '../trajet';
import { TrajetService } from '../trajet.service';


@Component({
  selector: 'app-edit-traject',
  templateUrl: './edit-traject.component.html',
  styleUrls: ['./edit-traject.component.css']
})
export class EditTrajectComponent implements OnInit {

  traj: Trajet= new Trajet();
  trajectId: number;

  constructor(private route: ActivatedRoute, private trajectService: TrajetService, private router: Router) { }

  ngOnInit(): void {
    this.trajectId= parseInt(this.route.snapshot.params['id']); //capter l ID
    console.log(this.trajectId);
    this.trajectService.getTrajectById(this.trajectId).subscribe((data: Trajet) =>{
      console.log(data);
      this.traj=data  //recuperer les anciennes infos
    } 
      )
  }

  onSubmit(form:NgForm){
    let traj: Trajet={
      id:this.trajectId,
      nom:form.value.nom,
      email:form.value.email,
      phone:form.value.phone,
      depart:form.value.depart,
      destination:form.value.destination,
      prix:form.value.prix
      }
      this.trajectService.editTraject(traj).subscribe(data =>{
        console.log("trajet updated", data);
        this.router.navigateByUrl('');
        
      }
     
      )
  }
}
