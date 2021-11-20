import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastrPageComponent } from './toastr-page.component';

describe('ToastrPageComponent', () => {
  let component: ToastrPageComponent;
  let fixture: ComponentFixture<ToastrPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToastrPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastrPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
