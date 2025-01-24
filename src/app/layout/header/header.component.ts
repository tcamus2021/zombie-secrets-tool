import { Component, Input } from '@angular/core';
import { Game } from '../../types/game.type';

@Component({
	selector: 'app-header',
	imports: [],
	templateUrl: './header.component.html',
	styleUrl: './header.component.css',
})
export class HeaderComponent {
	@Input() games: Array<Game> = [];
}
