import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MenuItem, Message, MessageService } from 'primeng/api';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Pessoa } from './models/pessoa.model';
import * as _ from 'lodash';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
  providers: [MessageService]
})
export class FormularioComponent {

  public idPrefeituraSelecionada: boolean = false;
  public idCadastroRealizado: boolean = false;

  public cidades: any = [
    {name: "Selecione..", code: null}
    , {name: "Extrema", code: "extrema"}
    , {name: "Morungaba", code: "morungaba"}
    , {name: "Santo Antônio de Posse", code: "santoAntonioDePosse"}
    , {name: "Lambari", code: "lambari"}
    , {name: "Monsenhor Paulo", code: "monsenhorPaulo"}
    , {name: "São Bento do Sapucaí", code: "saoBentoDoSapucai"}
    , {name: "Turvolândia", code: "turvolandia"}
  ];
  public filteredItems: any[] = [];

  public imgs = [
    { dsImg: "imgIdentidade", value: null }
    , { dsImg: "imgCertidaoNascimento", value: null }
    , { dsImg: "imgComprovanteResidencia", value: null }
    , { dsImg: "imgAntecedentesCivis", value: null }
    , { dsImg: "imgAntecedentesCriminais", value: null }
    , { dsImg: "imgQuitacaoEleitoral", value: null }
    , { dsImg: "imgDiploma", value: null }
    , { dsImg: "imgComprovacaoExperiencia", value: null }
    , { dsImg: "imgQuitacaoMilitar", value: null }
    , { dsImg: "imgCandidatoNaoPenalizado", value: null }
    , { dsImg: "imgPossibilidadeDePermanecerConselhoTutelar", value: null }
  ]

  public form = this.formBuilder.group({
    nmPessoa: ['', [Validators.required]],
    dsEndereco: ['', [Validators.required]],
    dsCidade: ['', [Validators.required]],
    dsEmail: ['', [Validators.required]],
    dsCelular: ['', [Validators.required]],
    dsCpf: ['', [Validators.required]],
    dsRg: ['', [Validators.required]],
    dsCidadePrefeitura: ['', [Validators.required]]
  });

  public salvarImg(dsImg: string, event: any){
    let index = this.imgs.findIndex(item => item.dsImg == dsImg)
    
    this.imgs[index].value = event.currentFiles[0];
    console.log(event.currentFiles[0]);
  }


  constructor(private formBuilder: FormBuilder, private firebaseService: FirebaseService, private messageService: MessageService){

  }

  public cadastrar() {
    let pessoa = new Pessoa(this.form.getRawValue());
    pessoa.imgs = this.imgs;
    let dsErros = "";


    if(this.form.valid && !this.verificaImgsFaltando()) {
      this.firebaseService.cadastrarPessoa(pessoa).finally(() => {
        setTimeout(() => {
          this.messageService.add({
              severity: "success",
              summary: "Cadastro realizado com sucesso!",
            });
          }, 1);
          this.idCadastroRealizado = true;
      });
    }else{


      setTimeout(() => {
        this.messageService.add({
          severity: "error",
          summary: "Falha!",
          detail: "Formulario inválido"
        });
      }, 1);
    }

    console.log(this.imgs)
    
  }

  public verificaImgsFaltando() {
    let isErro: boolean = false;

    this.imgs.forEach(img => {
      if(_.isNil(img.value)) isErro = true;
    });

    return isErro;
  }



}
