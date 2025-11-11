import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgIf } from '@angular/common';
import { TeamComponent } from './team/team.component';

interface TeamMember {
  name: string;
  summary: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgIf, TeamComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;
  isPlaying = false;
  selectedMember: TeamMember | null = null;

  playVideo() {
    const video = this.videoPlayer.nativeElement;
    video.play();
    this.isPlaying = true;
  }

  onMemberSelected(member: TeamMember) {
    this.selectedMember = member;
  }

  clearSelection() {
    this.selectedMember = null;
  }
}
