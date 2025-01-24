import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { CmsResponse } from '../types/response.type';
import { Game } from '../types/game.type';
import { environment } from '../../environnements/environnement';
import { ZombieMap } from '../types/secret.type';

@Injectable({
	providedIn: 'root',
})
export class ZombieSecretsCmsClient {
	private readonly ZCT_CMS_URL: string = environment.zstCmsUrl;
	private readonly ZCT_CMS_GAMES_ENDPOINT: string =
		environment.zstCmsGamesEndpoint;
	private readonly ZCT_CMS_MAPS_ENDPOINT: string =
		environment.zstCmsMapsEndpoint;

	constructor(private http: HttpClient) {}

	getZombieGames = (): Observable<CmsResponse<Array<Game>>> =>
		this.callApi<CmsResponse<Array<Game>>>(
			`${this.ZCT_CMS_GAMES_ENDPOINT}?populate=*`
		);

	getZombieMap = (id: string): Observable<CmsResponse<ZombieMap>> =>
		this.callApi<CmsResponse<ZombieMap>>(
			`${this.ZCT_CMS_MAPS_ENDPOINT}/${id}?populate=*`
		);

	private callApi<T>(endpoint: string): Observable<T> {
		return this.http
			.get<T>(this.ZCT_CMS_URL + endpoint)
			.pipe(
				catchError(() =>
					throwError(
						() => new Error('Erreur à la récupération des données')
					)
				)
			);
	}
}
