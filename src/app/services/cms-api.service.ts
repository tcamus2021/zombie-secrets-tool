import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { CmsResponse } from "../types/response.type";
import { Game } from "../types/game.type";
import { environment } from "../../environnements/environnement";

@Injectable({
    providedIn: 'root'
})
export class ZombieSecretsCmsClient {
    private readonly ZCT_CMS_URL: string = environment.zstCmsUrl;
    private readonly ZCT_CMS_GAMES_ENDPOINT: string = environment.zstCmsGamesEndpoint;

    constructor(private http: HttpClient) {}

    getZombieGames = (): Observable<CmsResponse<Array<Game>>> => this.callApi(`${this.ZCT_CMS_GAMES_ENDPOINT}?populate=*`);

    private callApi = (endpoint: string): Observable<any> => this.http.get(this.ZCT_CMS_URL + endpoint).pipe(
        catchError(() => throwError(()   => new Error('Erreur à la récupération des données')))
    );
};
