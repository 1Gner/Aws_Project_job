import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageJobComponent } from './page-job.component';

describe('PageJobComponent', () => {
  let component: PageJobComponent;
  let fixture: ComponentFixture<PageJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageJobComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
