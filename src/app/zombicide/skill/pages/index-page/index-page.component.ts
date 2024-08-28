import { Component, OnInit } from '@angular/core';
import { SkillService } from '../../services/skill.service';
import { Skill } from '../../entities/skill';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styles: ``,
})
export class IndexPageComponent implements OnInit {
  skills: Skill[] = [];

  constructor(private skillService: SkillService) {
  }

  ngOnInit(): void {
    this.skillService.getSkills().subscribe(skills => {
      this.skills = skills;
    });
  }
}
