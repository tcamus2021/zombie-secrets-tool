import { CmsObject } from './cms-object.type';

export type MapStep = CmsObject & {
	name: string;
	description: string;
	maxRound: number;
};
