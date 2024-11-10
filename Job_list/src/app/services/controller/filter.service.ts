import { Injectable } from '@angular/core';
import { DataService } from '../api/data.service';
import { BehaviorSubject, map, tap } from 'rxjs';
import { response } from 'express';


interface Emprego {
  id:number;
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
@Injectable({
  providedIn: 'root'
})
export class FilterService {


  constructor(private data: DataService) { }


  private database = new Map<string, Empresa>();


  private $database = new BehaviorSubject<Map<string, Empresa>>(this.database);


  private skills = new Set<string>();

  private $skills = new BehaviorSubject<Set<string>>(this.skills);


  Init() {
    this.data.getDado().pipe(
      map(response => response.body)

    ).subscribe({
      next: (data) => {
        data.forEach((empresa: any) => {

          const novaEmpresa: Empresa = {
            nomeEmprese: empresa.logo,
            photo: this.createImageFromBlob(empresa.foto),
            empregos: empresa.vagas.map((vaga: any): Emprego => ({
              id:vaga.id,
              Cargo: vaga.funcao,
              Data: this.calcularDiferencaEmDias(vaga.criada),
              Tipo: vaga.tipo,
              localizacao: vaga.localizacao,
              skills: vaga.skills

            }))
          };
          this.database.set(novaEmpresa.nomeEmprese, novaEmpresa);

        })
        this.$database.next(this.database);
        console.log('Dados recebidos com sucesso')
      },
      error: (err) => console.error('Erro ao buscar dados:', err),
      complete: () => console.log('Requisição completada')
    });
  }

  getDatabese() {
    return this.$database.asObservable();
  }

  createImageFromBlob(string: string): string {
    if (!string.startsWith('data:image/')) {
      //const imageType = string.includes('<svg') ? 'svg+xml' : 'jpeg';
      return 'data:image/svg+xml;base64,' + string;
    } else {
      return string;
    }

  }

  calcularDiferencaEmDias(dataRecebida: string | Date): string {
    // Cria um objeto Date para a data recebida
    const dataInicial = new Date(dataRecebida);
    const dataAtual = new Date();
    const diffEmMs = dataAtual.getTime() - dataInicial.getTime();
    const diffEmDias = diffEmMs / (1000 * 3600 * 24);
    return Math.round(diffEmDias).toString();
  }



  addSkill(skill: string) {
    this.skills.add(skill);
    this.$skills.next(this.skills);
  }


  getSKill(){
    return this.$skills.asObservable();
  }

  removeSKill(skill:string){
    this.skills.delete(skill);
    this.$skills.next(this.skills);
  }

  removeAllSKill(){
    this.skills.clear();
    this.$skills.next(this.skills);
  }
  
}
