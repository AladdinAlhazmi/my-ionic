import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AladdinPage } from './aladdin.page';

describe('AladdinPage', () => {
  let component: AladdinPage;
  let fixture: ComponentFixture<AladdinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AladdinPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AladdinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
