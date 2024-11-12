import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../../services/api/data.service';
import { FilterService } from '../../services/controller/filter.service';

@Component({
  selector: 'app-spam-add',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './spam-add.component.html',
  styleUrl: './spam-add.component.scss'
})

export class SpamAddComponent implements OnInit {

  formularioEmprego!: FormGroup;
  formularioEmpresa!: FormGroup;
  mostrarEmpresa: boolean = false;
  mostrarEmprego: boolean = false;
  choiceOpen: boolean = true;
  opcoes = new Map<number, string>();



  constructor(private formBuilder: FormBuilder, private data:DataService,private filterService: FilterService ) { }
  


  ngOnInit(): void {
    this.formularioEmprego = this.formBuilder.group({
      localizacao: [''],
      tipo: [''],
      funcao: [''],
      nome_empresa: [''],
      skills: ['']
    });

    this.formularioEmpresa = this.formBuilder.group({
      nome_empresa: [''],
      foto: [null]
    });

   this.filterService.getDatabese().subscribe(mapEmpresa => {
      mapEmpresa.forEach((a) => {
        this.opcoes.set(a.id, a.nomeEmprese);
      });
    });

  }


  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input && input.files && input.files.length > 0) {
      const file = input.files[0];
      this.formularioEmpresa.patchValue({
        foto: file
      });
    }
  }

  


  take_choice() {
    const meuselect = document.getElementById("choice") as HTMLSelectElement
      const option = meuselect?.value.toString();
      if(option == "empresa"){
        this.mostrarEmpresa = true;
      }else{
        this.mostrarEmprego = true;

      }

      this.choiceOpen = false;
      
  }

  enviarEmpresa(){
    this.data.PostEmpresa(this.formularioEmpresa.value).subscribe({
      next: (response) => {
        console.log('Resposta do servidor', response);
      },
      error: (err) => {
        console.error('Erro ao enviar dados', err);
      },
      complete: () => {
        console.log('Requisição concluída');
      }
    });
    
  }
  EnviarEmprego() {
    this.data.PostEmprego(this.formularioEmprego.value).subscribe({
      next: (response) => {
        console.log('Resposta do servidor', response);
      },
      error: (err) => {
        console.error('Erro ao enviar dados', err);
      },
      complete: () => {
        console.log('Requisição concluída');
      }
    });
    
  }

  closeSpam() {
    this.filterService.changeStatus();
    }


}
