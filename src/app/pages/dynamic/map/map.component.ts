import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ZombieMap } from '../../../types/secret.type';
import { ZombieSecretsCmsClient } from '../../../services/cms-api.service';
import { LoaderComponent } from '../../../common/loader/loader.component';
import { MapStep } from '../../../types/map-step.type';
import { RoundDisplayComponent } from '../../../common/round-display/round-display.component';
import { StepComponent } from '../../../common/step/step.component';
import { isLastStep } from '../../../utils/mapUtils';

@Component({
  selector: 'app-map',
  imports: [
    LoaderComponent,
    RoundDisplayComponent,
    StepComponent
  ],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements OnChanges {
  @Input() map: ZombieMap | undefined = undefined;
  mapDetail: ZombieMap | undefined = undefined;
  actualStep: MapStep | undefined = undefined;
  stepState: number = 0;
  skippedSteps: Array<MapStep> = [];
  finished: boolean = false;

  constructor(private cmsClient: ZombieSecretsCmsClient) { }

  ngOnChanges(changes: SimpleChanges): void {
      if(changes['map'] && changes['map'].currentValue) {
        const mapId = this.map?.documentId || '';
        this.cmsClient.getZombieMap(mapId).subscribe({
          next: (response): void => {
            this.mapDetail = response.data;
            this.stepState = Number.parseInt(localStorage.getItem(this.mapDetail.name) || '0');
            if(isLastStep(this.stepState, this.mapDetail.steps)) {
              this.finished = true;
              this.actualStep = this.mapDetail.steps[this.mapDetail.steps.length - 1];
            } else {
              this.actualStep = this.mapDetail.steps[this.stepState] || undefined;
            }
            this.skippedSteps = this.mapDetail.steps.slice(0, this.stepState);
          }
        });
      }
  }

  nextStep = (event: Event): void => {
    if(this.mapDetail && this.actualStep) {
      // Ne pas check la checkbox
      (event.target as HTMLInputElement).checked = false;

      // On met l'étape actuel dans les étapes passées et on incrémente l'index d'étape
      this.skippedSteps.push(this.actualStep);
      this.stepState++;

      // Stockage dans le navigateur en cas de refresh
      localStorage.setItem(this.mapDetail.name, `${this.stepState}`);

      // On change l'étape s'il y en a encore
      if(!isLastStep(this.stepState, this.mapDetail.steps)) {
        this.actualStep = this.mapDetail.steps[this.stepState];
      } else {
        this.finished = true;
      }
    }
  }

  restart = (): void => {
    if(this.mapDetail) {
      // On ré-initialise les données
      this.skippedSteps = [];
      this.stepState = 0;
      this.actualStep = this.mapDetail.steps[this.stepState];
      this.finished = false;

      // On supprime le stockage navigateur
      localStorage.removeItem(this.mapDetail.name);
    }
  }
}
