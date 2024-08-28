import { NgModule } from '@angular/core';

import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { ZombicideRoutingModule } from './zombicide-routing.module';

import { LayoutComponent } from './layout/layout.component';
import { AvatarModule } from 'primeng/avatar';

@NgModule({
  declarations: [
    LayoutComponent,
  ],
  imports: [
    AvatarModule,
    CardModule,
    InputTextModule,
    MenuModule,
    MenubarModule,
    ZombicideRoutingModule,
  ],
})
export class ZombicideModule {
}
