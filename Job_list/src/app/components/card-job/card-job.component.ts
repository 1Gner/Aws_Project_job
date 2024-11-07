import { Component, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { MiniCardFilterComponent } from '../mini-card-filter/mini-card-filter.component';

@Component({
  selector: 'app-card-job',
  standalone: true,
  imports: [],
  templateUrl: './card-job.component.html',
  styleUrl: './card-job.component.scss'
})
export class CardJobComponent implements OnInit{

  photo:string="";
  company_name: string = "";
  function: string = "";
  time: string = "";
  type: string = "";
  location: string = "";

  productComponentMap = new Map<string, ComponentRef<MiniCardFilterComponent>>();


  @ViewChild('skill', { read: ViewContainerRef, static: true }) skill!: ViewContainerRef;



  ngOnInit(){
    this.addOrUpdateComponent();
  } 

  addOrUpdateComponent() {
    if (this.skill) {
      
      if (this.productComponentMap) {
        const componentRef = this.skill.createComponent(MiniCardFilterComponent);
        componentRef.instance.namefilter = "FrontEnd" ;


        
      } else {


      }
    }
  }

}
