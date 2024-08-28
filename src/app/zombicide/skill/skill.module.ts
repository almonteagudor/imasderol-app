import { NgModule } from '@angular/core';

import { AccordionModule } from 'primeng/accordion';
import { CommonModule } from '@angular/common';
import { SkillRoutingModule } from './skill-routing.module';

import { IndexPageComponent } from './pages/index-page/index-page.component';

@NgModule({
  declarations: [
    IndexPageComponent,
  ],
  imports: [
    AccordionModule,
    CommonModule,
    SkillRoutingModule,
  ],
})
export class SkillModule {
}
