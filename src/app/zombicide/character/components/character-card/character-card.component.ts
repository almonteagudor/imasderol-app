import { Component, Input } from '@angular/core';
import { Character } from '../../entities/character';

@Component({
  selector: 'zombicide-character-card',
  templateUrl: './character-card.component.html',
  styles: ``,
})
export class CharacterCardComponent {
  @Input() character: Character | null = null;
}
