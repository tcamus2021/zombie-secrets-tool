import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-round-display',
  imports: [],
  templateUrl: './round-display.component.html',
  styleUrl: './round-display.component.css'
})
export class RoundDisplayComponent {
  @Input() round: number = 0;
}
