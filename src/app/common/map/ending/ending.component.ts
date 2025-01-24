import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-ending',
	imports: [],
	templateUrl: './ending.component.html',
	styleUrl: './ending.component.css',
})
export class EndingComponent {
	@Input() mapName: string = '';
}
