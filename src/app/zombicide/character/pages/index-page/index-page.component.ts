import { Component, OnInit } from '@angular/core';
import { Character } from '../../entities/character';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styles: ``,
})
export class IndexPageComponent implements OnInit {
  characters: Character[] = [];

  constructor(private characterService: CharacterService) {
  }

  ngOnInit(): void {
    this.characterService.getCharacters().subscribe(characters => {
      this.characters = characters;
    });
  }
}
