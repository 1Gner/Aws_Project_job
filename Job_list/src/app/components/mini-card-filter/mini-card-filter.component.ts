import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-mini-card-filter',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './mini-card-filter.component.html',
  styleUrl: './mini-card-filter.component.scss'
})
export class MiniCardFilterComponent {
  namefilter:string=""
}
