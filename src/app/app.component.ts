import { Component } from '@angular/core';

import { PoMenuItem } from '@portinari/portinari-ui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', link: '/'},
    { label: 'Quem somos', link: 'quem-somos'},
    { label: 'Missão', link: 'missao'},
    { label: 'Valores', link: 'valores'},
    { label: 'Galeria', link: 'galeria' },
    { label: 'Serviços', link: 'servicos' },
    { label: 'Contato', link: 'contato' },
  ];
}
