import { Component } from '@angular/core'
import { courcesServis } from './cources.service';
@Component({
  selector:'cources',
  template:`<h2>{{ text }}</h2>
            <ul>
              <li *ngFor="let cource of cources">
                  {{ cource }}
              </li>
            </ul>
  `
})
export class CourcesComponent{
  text ="List of cources"
  cources;

  constructor(service: courcesServis){
     this.cources = service.getCources();
  }
}