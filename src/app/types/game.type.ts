import { CmsObject } from "./cms-object.type";
import { GameLogo } from "./image.type";

export type Game = CmsObject & {
    name: string;
    weight: number;
    shortName: string;
    url: string;
    logo: GameLogo;
};