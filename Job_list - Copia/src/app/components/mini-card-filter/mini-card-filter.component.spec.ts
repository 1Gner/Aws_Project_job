import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniCardFilterComponent } from './mini-card-filter.component';

describe('MiniCardFilterComponent', () => {
  let component: MiniCardFilterComponent;
  let fixture: ComponentFixture<MiniCardFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiniCardFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiniCardFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
