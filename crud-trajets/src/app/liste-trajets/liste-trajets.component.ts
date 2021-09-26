import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TRAJETS } from '../mock-trajets';
import { Trajet } from '../trajet';
import { TrajetService } from '../trajet.service';

@Component({
  selector: 'app-liste-trajets',
  templateUrl: './liste-trajets.component.html',
  styleUrls: ['./liste-trajets.component.css']
})
export class ListeTrajetsComponent implements OnInit {

 allTrajects: Trajet[]=[];

  constructor(private trajetService: TrajetService , private router: Router) { }

  ngOnInit(): void {

    this.getTrajects();
    console.log("page rafraichie")
    //this.getAllTrajects();
    //  this.getTrajects();
    // this.allTrajects=TRAJETS;
    // console.log(this.allTrajects);
  }

  // getTrajects():void{
  //   this.trajetService.getTrajets().subscribe(x=>(this.allTrajects=x));
  // }


  getTrajects(): void {

    this.trajetService.getTrajects().subscribe((data: Trajet[])=>{
      console.log(data);
      this.allTrajects=data;
    })
  }


  //GOOD
  // getAllTrajects(): void{
  //   this.trajetService.getAllTrajects().subscribe((data: Trajet []) =>{
  //     console.log(data);
  //     this.allTrajects=data;
  //   })
  // }

  // removeTraject(id){
  //   this.trajetService.deleteTraject(id).subscribe((trajet)=>{
  //     console.log("Traject removed", trajet);
  //     this.router.navigateByUrl("/");

  //   })
  // }

//   public removeTraject(trajectId : number){
//     this.trajetService.deleteTraject(trajectId).subscribe((ret)=>{
//           console.log("Traject deleted: ", ret);
//     })
// }

public removeTraject(trajectId){
  this.trajetService.deleteTraject(trajectId).subscribe((trajet)=>{
        console.log("Traject removed: ", trajet);
        ///this.router.navigateByUrl('');
  });
  this.getTrajects();
}

}
