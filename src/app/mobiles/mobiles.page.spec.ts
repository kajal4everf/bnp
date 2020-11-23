import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MobilesPage } from './mobiles.page';

describe('MobilesPage', () => {
  let component: MobilesPage;
  let fixture: ComponentFixture<MobilesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobilesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MobilesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
