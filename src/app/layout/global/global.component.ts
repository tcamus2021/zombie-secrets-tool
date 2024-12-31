import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { ZombieSecretsCmsClient } from '../../services/cms-api.service';
import { LoaderComponent } from '../../common/loader/loader.component';
import { ErrorComponent } from '../../common/error/error.component';
import { sortGames } from '../../utils/sort';
import { Game } from '../../types/game.type';

@Component({
  selector: 'app-global',
  imports: [
    HeaderComponent,
    FooterComponent,
    RouterOutlet,
    LoaderComponent,
    ErrorComponent
  ],
  templateUrl: './global.component.html',
  styleUrl: './global.component.css'
})
export class GlobalComponent implements OnInit {
  isLoading: boolean = false;
  hasError: boolean = false;
  games: Array<Game> = [];

  constructor(private cmsClient: ZombieSecretsCmsClient) { }

  ngOnInit(): void {
    this.getGames();
  }

  getGames = () => {
    this.cmsClient.getZombieGames().subscribe({
      next: (response): void => {
        this.games = sortGames(response.data);
        this.isLoading = false;
      },
      error: (err): void => {
        this.isLoading = false;
        this.hasError = true;
      }
    })
  }
}
