import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyStepComponent } from './empty-step.component';

describe('EmptyStepComponent', () => {
	let component: EmptyStepComponent;
	let fixture: ComponentFixture<EmptyStepComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [EmptyStepComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(EmptyStepComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
