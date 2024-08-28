import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  items: MenuItem[] = [];

  ngOnInit(): void {
    this.items = [
      {
        label: 'Zombicide',
        routerLink: ['zombicide'],
      },
    ];
  }
}
