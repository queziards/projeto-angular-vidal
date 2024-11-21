import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoProdutosComponent } from './info-produtos.component';

describe('InfoProdutosComponent', () => {
  let component: InfoProdutosComponent;
  let fixture: ComponentFixture<InfoProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoProdutosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
