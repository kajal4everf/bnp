import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VehicleModalPage } from './vehicle-modal.page';

describe('VehicleModalPage', () => {
  let component: VehicleModalPage;
  let fixture: ComponentFixture<VehicleModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VehicleModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
