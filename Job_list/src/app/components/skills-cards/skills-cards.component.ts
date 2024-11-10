import { Component } from '@angular/core';
import { FilterService } from '../../services/controller/filter.service';

@Component({
  selector: 'app-skills-cards',
  standalone: true,
  imports: [],
  templateUrl: './skills-cards.component.html',
  styleUrl: './skills-cards.component.scss'
})
export class SkillsCardsComponent {

  skill:string = "";
  constructor(private filterService: FilterService) { }


addSkillFilter() {
  this.filterService.addSkill(this.skill);
}

 
}
