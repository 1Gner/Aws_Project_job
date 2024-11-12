import { CommonModule } from '@angular/common';
import { Component, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { CardJobComponent } from '../card-job/card-job.component';
import { DataService } from '../../services/api/data.service';
import { map } from 'rxjs';
import { FilterService } from '../../services/controller/filter.service';
import { MiniCardFilterComponent } from '../mini-card-filter/mini-card-filter.component';
import { SpamAddComponent } from "../spam-add/spam-add.component";



interface Emprego {
  id: number;
  Cargo: string;
  Data: string;
  Tipo: string;
  localizacao: string;
  skills: string[];
}

interface Empresa {
  nomeEmprese: string;
  photo: string;
  empregos: Emprego[];

}
@Component({
  selector: 'app-page-job',
  standalone: true,
  imports: [CommonModule, SpamAddComponent],
  templateUrl: './page-job.component.html',
  styleUrl: './page-job.component.scss'
})
export class PageJobComponent implements OnInit {

  ComponentMap = new Map<number, ComponentRef<CardJobComponent>>();
  SkillFilterMap = new Map<string, ComponentRef<MiniCardFilterComponent>>();

  mostrarSpam:boolean = false;


  @ViewChild('job', { read: ViewContainerRef, static: true }) job!: ViewContainerRef;
  @ViewChild('filter', { read: ViewContainerRef, static: true }) filter!: ViewContainerRef;
  


  constructor(private data: DataService, private filterService: FilterService) {

  }


  ngOnInit() {


    this.filterService.Init();

    this.filterService.getDatabese().subscribe(mapEmpresa => {
      this.ComponentMap.clear();
      mapEmpresa.forEach((value: Empresa) => {
        this.addOrUpdateComponent(value);
      })
    });

    this.filterService.$status.subscribe(status => {
      this.mostrarSpam = status;
    })



    this.filterService.getSKill().subscribe(skills => {
      this.filter.clear();
      skills.forEach(skill => {
        this.addOrUpdateSkillsFilter(skill);
      })
      this.RespawnComponent();
      this.ComponentMap.forEach((value: ComponentRef<CardJobComponent>) => {
        if (!value.instance.skills.some(skill => skills.has(skill)) && skills.size > 0) {
          value.destroy();
          this.ComponentMap.delete(value.instance.id);
        }

      })
    })




  }

  RespawnComponent() {
    this.ComponentMap.clear();
    this.job.clear();
    this.filterService.getDatabese().subscribe(mapEmpresa => {
      mapEmpresa.forEach((value: Empresa) => {
        this.addOrUpdateComponent(value);
      })
    });
  }


  addOrUpdateComponent(value: Empresa) {
    if (this.job) {
      if (this.ComponentMap) {
        for (let i = 0; i < value.empregos.length; i++) {
          if (!this.ComponentMap.has(value.empregos[i].id)) {
            const componentRef = this.job.createComponent(CardJobComponent);
            componentRef.instance.photo = value.photo;
            componentRef.instance.company_name = value.nomeEmprese;
            componentRef.instance.function = value.empregos[i].Cargo;
            componentRef.instance.location = value.empregos[i].localizacao;
            componentRef.instance.time = value.empregos[i].Data;
            componentRef.instance.type = value.empregos[i].Tipo;
            componentRef.instance.skills = value.empregos[i].skills;
            componentRef.instance.id = value.empregos[i].id;

            this.ComponentMap.set(value.empregos[i].id, componentRef);
        
          }
        }

      }
    }
  }


  addOrUpdateSkillsFilter(stringFilter: string) {
    if (this.filter) {
      if (this.SkillFilterMap) {
        const componentRef = this.filter.createComponent(MiniCardFilterComponent);
        componentRef.instance.namefilter = stringFilter;
        this.SkillFilterMap.set(stringFilter, componentRef);
      }
    }
  }
  clearSkills() {
    this.filterService.removeAllSKill();
  }


  showSpam() {
    this.mostrarSpam = true;
  }


}
