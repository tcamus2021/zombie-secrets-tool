import { CmsObject } from './cms-object.type';
import { GameLogo } from './image.type';
import { MapStep } from './map-step.type';

export type ZombieMap = CmsObject & {
	type: 'ZombieMap';
	name: string;
	url: string;
	weight: number;
	image: GameLogo;
	steps: Array<MapStep>;
};
