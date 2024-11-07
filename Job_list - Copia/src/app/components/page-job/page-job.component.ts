import { CommonModule } from '@angular/common';
import { Component, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { CardJobComponent } from '../card-job/card-job.component';

@Component({
  selector: 'app-page-job',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-job.component.html',
  styleUrl: './page-job.component.scss'
})
export class PageJobComponent implements OnInit {

  productComponentMap = new Map<string, ComponentRef<CardJobComponent>>();

  @ViewChild('job', { read: ViewContainerRef, static: true }) job!: ViewContainerRef;


  ngOnInit(){

    this.addOrUpdateComponent();

  }


  addOrUpdateComponent() {
    if (this.job) {
      
      if (this.productComponentMap) {
        const componentRef = this.job.createComponent(CardJobComponent);
        componentRef.instance.photo = "../../../assets/images/photosnap.svg" ;
        componentRef.instance.company_name = "PhotoSnap";
        componentRef.instance.function = "Senior Frontend Developer";
        componentRef.instance.location = "Usa Only" ;
        componentRef.instance.time = "1 day";
        componentRef.instance.type = "Full time";

        const componentRef2 = this.job.createComponent(CardJobComponent);
        componentRef2.instance.photo = "../../../assets/images/photosnap.svg" ;
        componentRef2.instance.company_name = "PhotoSnap";
        componentRef2.instance.function = "Senior Frontend Developer";
        componentRef2.instance.location = "Usa Only" ;
        componentRef2.instance.time = "1 day";
        componentRef2.instance.type = "Full time";

        
        
      } else {
        const componentRef = this.job.createComponent(CardJobComponent);
        componentRef.instance.photo = "../../../assets/images/photosnap.svg" ;
        componentRef.instance.company_name = "PhotoSnap";
        componentRef.instance.function = "Senior Frontend Developer";
        componentRef.instance.location = "Usa Only" ;
        componentRef.instance.time = "1 day";
        componentRef.instance.type = "Full time";
      

      }
    }
  }


}
