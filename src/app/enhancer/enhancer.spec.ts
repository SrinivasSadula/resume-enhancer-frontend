import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Enhancer } from './enhancer';

describe('Enhancer', () => {
  let component: Enhancer;
  let fixture: ComponentFixture<Enhancer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Enhancer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Enhancer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
