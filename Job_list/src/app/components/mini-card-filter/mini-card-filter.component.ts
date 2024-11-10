import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FilterService } from '../../services/controller/filter.service';

@Component({
  selector: 'app-mini-card-filter',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './mini-card-filter.component.html',
  styleUrl: './mini-card-filter.component.scss'
})
export class MiniCardFilterComponent {

  namefilter:string=""

  constructor(private filterService: FilterService){}


  closeFilter() {
    this.filterService.removeSKill(this.namefilter);
    }
}
