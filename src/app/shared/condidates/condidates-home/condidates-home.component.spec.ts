import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondidatesHomeComponent } from './condidates-home.component';

describe('CondidatesHomeComponent', () => {
  let component: CondidatesHomeComponent;
  let fixture: ComponentFixture<CondidatesHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CondidatesHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CondidatesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
