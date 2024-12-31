import { Game } from "../types/game.type";

export const sortGames = (games: Array<Game>): Array<Game> => games.sort((game1, game2) => game1.weight - game2.weight);
