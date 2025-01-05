import { Component, OnInit } from '@angular/core';
import { DynamicPageType } from '../../enum/dynamic-pages.enum';
import { GameComponent } from './game/game.component';
import { MapComponent } from './map/map.component';
import { CmsResponseService } from '../../services/cms-response.service';
import { Game } from '../../types/game.type';
import { getAllMaps, getDynamicGame, getDynamicMap, getDynamicPageType } from '../../utils/dynamicUtils';
import { ZombieMap } from '../../types/secret.type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dynamic',
  imports: [
    GameComponent,
    MapComponent
  ],
  templateUrl: './dynamic.component.html',
  styleUrl: './dynamic.component.css'
})
export class DynamicComponent implements OnInit {
  pageType: DynamicPageType | null = null;
  data: Array<Game> = [];
  actualGame: Game | undefined = undefined;
  actualMap: ZombieMap | undefined = undefined;

  constructor(private cmsResponseService: CmsResponseService, private router: Router) { }


  ngOnInit(): void {
    this.cmsResponseService.data$.subscribe(responseData => {
      this.data = responseData;
      this.pageType = getDynamicPageType(responseData);

      const actualUrl = window.location.pathname;
      switch (this.pageType) {
        case DynamicPageType.GAME: {
          this.actualGame = getDynamicGame(actualUrl, this.data);
          break;
        }
        case DynamicPageType.MAP: {
          const allMap = getAllMaps(this.data);
          this.actualMap = getDynamicMap(actualUrl, allMap);
          break;
        }
        case DynamicPageType.UNKNOWN: {
          this.router.navigate(['/']);
          break;
        }
        default: break;
      }
    })
  }
}
