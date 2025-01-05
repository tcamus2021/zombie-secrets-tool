import { MapStep } from "../types/map-step.type";

export const isLastStep = (currentIndex: number, steps: Array<MapStep>) => steps.length === currentIndex;