import { Component, Input } from '@angular/core';
import { Game } from '../../types/game.type';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  @Input() games: Array<Game> = [];
  API_URL: string = 'http://localhost:1337';
}
