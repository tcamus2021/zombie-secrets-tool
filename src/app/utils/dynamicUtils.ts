import { DynamicPageType } from "../enum/dynamic-pages.enum";
import { Game } from "../types/game.type";
import { ZombieMap } from "../types/secret.type";

export const getDynamicGame = (url: string, games: Array<Game>): Game | undefined => games.find(game => game.url === url);

export const getDynamicMap = (url: string, maps: Array<ZombieMap>): ZombieMap | undefined => maps.find(map => map.url === url);

export const getAllMaps = (games: Array<Game>): Array<ZombieMap> => games.reduce((acc: Array<ZombieMap>, game: Game) => {
    game.zombieMaps.forEach((map: ZombieMap) => acc.push(map));
    return acc;
}, []);

export const getDynamicPageType = (games: Array<Game>) => {
    // Si games est vide ou null, c'est en cours de chargement, on ne peut donc pas connaitre le type de page
    if (games?.length === 0) {
        return null;
    }

    const actualUrl = window.location.pathname;

    if(getDynamicGame(actualUrl, games) !== undefined) {
        return DynamicPageType.GAME;
    }

    else if (getDynamicMap(actualUrl, getAllMaps(games)) !== undefined) {
        return DynamicPageType.MAP
    }

    else {
        return DynamicPageType.UNKNOWN;
    }

};
