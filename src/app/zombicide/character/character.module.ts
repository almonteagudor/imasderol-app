import { NgModule } from '@angular/core';

import { CharacterRoutingModule } from './character-routing.module';
import { CommonModule } from '@angular/common';
import { ImageModule } from 'primeng/image';

import { CharacterCardComponent } from './components/character-card/character-card.component';
import { IndexPageComponent } from './pages/index-page/index-page.component';

@NgModule({
  declarations: [
    CharacterCardComponent,
    IndexPageComponent,
  ],
  imports: [
    CharacterRoutingModule,
    CommonModule,
    ImageModule,
  ],
})
export class CharacterModule { }
