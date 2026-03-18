import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  menuItems: any[] = [];

  ngOnInit(): void {
    this.getMenuItems();
  }

  getMenuItems() {
    this.menuItems = [
      { label: 'Inicio', path: './' },
      { label: 'Servicios', path: './servicios' },
      { label: 'Nosotros', path: './nosotros' },
      { label: 'Contacto', path: './contacto' }
    ];
  }

}
