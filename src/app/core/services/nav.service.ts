import { Injectable } from '@angular/core';
import { Menu } from '../../shared/components/nav-aside/nav-aside.component';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  title: string;

  menu: Menu[] = [
    {
      section: 'Estrenos', items: [
        { title: 'Peliculas', icon: 'movie', route: '' },
        { title: 'Series', icon: 'videocam', route: '' },
        { title: 'Documentales', icon: 'pan_tool', route: '' },
        { title: 'Cortos', icon: 'group_work', route: '' },
        { title: 'Teatro', icon: 'accessibility', route: '' },
        { title: 'Cuenteros', icon: 'record_voice_over', route: '' },
        { title: 'Eventos', icon: 'today', route: '' }
      ]
    },
    {
      section: 'Perfil', items: [
        { title: 'Cerrar Sesión', icon: '', route: '' }
      ]
    }
  ];

  constructor() { }
}
