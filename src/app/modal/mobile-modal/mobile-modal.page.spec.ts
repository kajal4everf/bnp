import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MobileModalPage } from './mobile-modal.page';

describe('MobileModalPage', () => {
  let component: MobileModalPage;
  let fixture: ComponentFixture<MobileModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MobileModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
