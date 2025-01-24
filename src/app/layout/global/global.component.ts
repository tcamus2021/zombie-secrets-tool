import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { ZombieSecretsCmsClient } from '../../services/cms-api.service';
import { LoaderComponent } from '../../common/loader/loader.component';
import { ErrorComponent } from '../../common/error/error.component';
import { sortGames } from '../../utils/sort';
import { Game } from '../../types/game.type';
import { CmsResponseService } from '../../services/cms-response.service';

@Component({
	selector: 'app-global',
	imports: [
		HeaderComponent,
		FooterComponent,
		RouterOutlet,
		LoaderComponent,
		ErrorComponent,
	],
	templateUrl: './global.component.html',
	styleUrl: './global.component.css',
})
export class GlobalComponent implements OnInit {
	isLoading: boolean = false;
	hasError: boolean = false;
	games: Array<Game> = [];

	constructor(
		private cmsClient: ZombieSecretsCmsClient,
		private cmsResponseService: CmsResponseService
	) {}

	ngOnInit(): void {
		this.getGames();
	}

	getGames = () => {
		this.cmsClient.getZombieGames().subscribe({
			next: (response): void => {
				this.games = sortGames(response.data);
				this.isLoading = false;
				this.cmsResponseService.setData(this.games);
			},
			error: (): void => {
				this.isLoading = false;
				this.hasError = true;
			},
		});
	};
}
