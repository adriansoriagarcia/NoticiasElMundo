import { Component } from '@angular/core';
import { NoticiaService } from './services/noticia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listNoticias : any[] = [];
  loading = false;

  constructor(private _noticiaService: NoticiaService){

  }

  buscarNoticias(){
    this.loading = true;
    this.listNoticias = [];
    setTimeout(() => {
    
      this._noticiaService.getNoticias().subscribe(data => {
        this.loading = false;
        this.listNoticias = data.items;
      }, error => {
        console.log(error);
        this.loading = false;
      })
    }, 1000);
    
  }
}
