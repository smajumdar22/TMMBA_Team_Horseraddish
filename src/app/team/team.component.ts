import { Component, EventEmitter, Output } from '@angular/core';
import { NgFor } from '@angular/common';

interface TeamMember {
  name: string;
  summary: string;
}

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [NgFor],
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
})
export class TeamComponent {
  @Output() memberSelected = new EventEmitter<TeamMember>();

  team: TeamMember[] = [
    { name: 'Jane', summary: 'Jane is our creative lead who brings fresh ideas.' },
    { name: 'Yu', summary: 'Yu is analytical and ensures our data is spot on.' },
    { name: 'Galen', summary: 'Galen keeps everyone aligned and motivated.' },
    { name: 'Chris', summary: 'Chris is the communicator who connects everything.' },
    { name: 'Ranjith', summary: 'Ranjith is a tech wizard with problem-solving skills.' },
    { name: 'Shubham', summary: 'Shubham is a backup' },
  ];

  selectMember(member: TeamMember) {
    this.memberSelected.emit(member);
  }
}
