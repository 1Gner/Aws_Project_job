import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpamAddComponent } from './spam-add.component';

describe('SpamAddComponent', () => {
  let component: SpamAddComponent;
  let fixture: ComponentFixture<SpamAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpamAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpamAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
