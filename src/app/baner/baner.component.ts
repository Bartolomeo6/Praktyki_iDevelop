import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-baner',
  imports: [],
  templateUrl: './baner.component.html',
  styleUrl: './baner.component.css'
})
export class BanerComponent {
  @Input() gifUrl: string = '/baner_video.gif';

  scrollTo(elementId: string): void { 
    document.getElementById(elementId)?.scrollIntoView({ behavior: 'smooth' })
  };
}
