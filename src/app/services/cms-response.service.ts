import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Game } from '../types/game.type';

@Injectable({
	providedIn: 'root',
})
export class CmsResponseService {
	private dataSubject = new BehaviorSubject<Array<Game>>([]);
	data$ = this.dataSubject.asObservable();

	setData(data: Array<Game>) {
		this.dataSubject.next(data);
	}
}
