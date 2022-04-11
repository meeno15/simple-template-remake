import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriosRemakeComponent } from './crios-remake.component';

describe('CriosRemakeComponent', () => {
  let component: CriosRemakeComponent;
  let fixture: ComponentFixture<CriosRemakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriosRemakeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriosRemakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
