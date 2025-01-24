import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundDisplayComponent } from './round-display.component';

describe('RoundDisplayComponent', () => {
	let component: RoundDisplayComponent;
	let fixture: ComponentFixture<RoundDisplayComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [RoundDisplayComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(RoundDisplayComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
