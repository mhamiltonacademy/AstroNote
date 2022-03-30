import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  
    today = ['finish routing for frontend components', 'start on landing page', 'fix icon on navbar', 'replace lorem ipsum']
    upcoming = ['prepare for code review', 'update readme', 'add filter feature', 'push local changes to github']
    projects = [
      {name: 'Angular Frontend', tasks: 5, inProgress: 3, deadline: '3/30/22'},
      {name: 'Express Backend', tasks: 2, inProgress: 0, deadline: '5/23/22'},
      {name: 'Web App Security', tasks: 12, inProgress: 0, deadline: '7/14/22'},
    ]

  constructor() { }

  ngOnInit(): void {
  }

}
