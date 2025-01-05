import { Component, Input } from '@angular/core';
import { Game } from '../../../types/game.type';
import { MapCardComponent } from '../../../common/map-card/map-card.component';

@Component({
  selector: 'app-game',
  imports: [
    MapCardComponent
  ],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {
  @Input() game: Game | undefined = undefined;
}
