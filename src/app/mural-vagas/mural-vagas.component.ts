import { VagaService } from './../vagas.service';
import { Component, OnInit } from '@angular/core';
import { Vaga } from '../Modelos/Modelos.Vagas';


@Component(
  {
        selector: 'app-mural-vagas',
        templateUrl: './mural-vagas.component.html',
        styleUrls: ['./mural-vagas.component.css']
      }
)


export class MuralVagasComponent implements OnInit {

  public vagas: Vaga[ ] = [ ];

  constructor(private  _VagaService: VagaService) { }

  ngOnInit(): void {
    this.listarVagas();
  }

        listarVagas(){
          this. _VagaService.getVagas()
            .subscribe(
                  retornaVaga => {
                this.vagas = retornaVaga.map(
                       item=>{ 
                        return new Vaga(
                          item.id,
                          item.nome,
                          item.foto,
                          item.descricao,
                          item.salario
                          );
                        }
                      )
                    }
            )
       }
    }
