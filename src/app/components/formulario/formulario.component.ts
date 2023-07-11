import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Output() parametrosSeleccionado = new EventEmitter<any>();


  categoriaSeleccionada = 'general';
  paisSeleccionado = 'fr';


  categorias:any [] = [
    {value:'general', nombre:'General'},
    {value:'business', nombre:'Negocios'},
    {value:'entertainment', nombre:'Entretenimiento'},
    {value:'health', nombre:'Salud'},
    {value:'science', nombre:'Ciencia'},
    {value:'sports', nombre:'Deportes'},
    {value:'technology', nombre:'Tecnología'},

  ];

  paises:any [] = [
    {value:'pt', nombre:'Portugal'},
    {value:'br', nombre:'Brasil'},
    {value:'ar', nombre:'Argentina'},
    {value:'fr', nombre:'Francia'},
    {value:'gb', nombre:'Reino Unido'},
    {value:'hu', nombre:'Hungria'},

  ];
  constructor() { }

  ngOnInit(): void {
  }

  buscarNoticia(){
    const PARAMETROS = {
      categoria: this.categoriaSeleccionada,
      pais: this.paisSeleccionado
    }

    this.parametrosSeleccionado.emit(PARAMETROS);
  }

}
