import { Component, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { MiniCardFilterComponent } from '../mini-card-filter/mini-card-filter.component';
import { SkillsCardsComponent } from '../skills-cards/skills-cards.component';

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
  skills: string[] = [];
  id:number = 0;

  productComponentMap = new Map<string, ComponentRef<SkillsCardsComponent>>();


  @ViewChild('skill', { read: ViewContainerRef, static: true }) skill!: ViewContainerRef;



  ngOnInit(){
    this.addOrUpdateSkill();
  } 



  addOrUpdateSkill() {
    if (this.skill) {
      
      if (this.productComponentMap) {
        for(let i = 0; i < this.skills.length; i++) {
          const componentRef = this.skill.createComponent(SkillsCardsComponent);
          componentRef.instance.skill = this.skills[i]; 
        }
       
  
      } else {


      }
    }
  }

}
