import { CmsObject } from './cms-object.type';
import { GameLogo } from './image.type';
import { ZombieMap } from './secret.type';

export type Game = CmsObject & {
	type: 'Game';
	name: string;
	weight: number;
	shortName: string;
	url: string;
	logo: GameLogo;
	zombieMaps: Array<ZombieMap>;
};
