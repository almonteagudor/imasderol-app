import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styles: ``,
})
export class LayoutComponent implements OnInit {
  items: MenuItem[] = [];

  ngOnInit(): void {
    this.items = [
      {
        label: 'Home',
        icon: PrimeIcons.HOME,
        routerLink: ['home'],
      },
      {
        label: 'Characters',
        icon: PrimeIcons.USERS,
        routerLink: ['characters'],
      },
      {
        label: 'Skills',
        icon: PrimeIcons.SITEMAP,
        routerLink: ['skills'],
      },
    ];
  }
}
