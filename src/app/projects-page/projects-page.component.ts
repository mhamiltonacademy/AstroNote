import { Component } from '@angular/core';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.css']
})
export class ProjectsPageComponent {
  projects: Project[] = [
    {name: 'AstroNote', tasks: 5, inProgress: 3, deadline: '3/30/22'},
    {name: 'Frontend', tasks: 2, inProgress: 0, deadline: '5/23/22'},
    {name: 'Database', tasks: 12, inProgress: 0, deadline: '7/14/22'},
    {name: 'Frontend', tasks: 2, inProgress: 0, deadline: '5/23/22'},
    {name: 'AstroNote', tasks: 5, inProgress: 3, deadline: '3/30/22'},
    {name: 'Database', tasks: 12, inProgress: 0, deadline: '7/14/22'},
    {name: 'AstroNote', tasks: 5, inProgress: 3, deadline: '3/30/22'},
    {name: 'Database', tasks: 12, inProgress: 0, deadline: '7/14/22'},
    {name: 'Frontend', tasks: 2, inProgress: 0, deadline: '5/23/22'},
  ]
}

export interface Project {
  name: string;
  tasks: number;
  inProgress: number;
  deadline: string;
}
