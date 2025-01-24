import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-empty-step',
	imports: [],
	templateUrl: './empty-step.component.html',
	styleUrl: './empty-step.component.css',
})
export class EmptyStepComponent {
	@Input() mapName: string = '';
}
