import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibicaoHomeComponent } from './exibicao-home.component';

describe('ExibicaoHomeComponent', () => {
  let component: ExibicaoHomeComponent;
  let fixture: ComponentFixture<ExibicaoHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExibicaoHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExibicaoHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
