import { Component, Input } from '@angular/core';
import { Project } from '../projects-page/projects-page.component';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent  {

 // @ts-ignore 2564
  @Input() project: Project;

}
