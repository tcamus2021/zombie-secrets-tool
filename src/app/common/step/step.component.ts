import { Component, Input } from '@angular/core';
import { MapStep } from '../../types/map-step.type';

@Component({
	selector: 'app-step',
	imports: [],
	templateUrl: './step.component.html',
	styleUrl: './step.component.css',
})
export class StepComponent {
	@Input() step: MapStep | undefined = undefined;
	@Input() isSkipped: boolean = false;
	@Input() nextStep!: (event: Event) => void;
}
