import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriosRemakeBodyComponent } from './crios-remake-body.component';

describe('CriosRemakeBodyComponent', () => {
  let component: CriosRemakeBodyComponent;
  let fixture: ComponentFixture<CriosRemakeBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriosRemakeBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriosRemakeBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
