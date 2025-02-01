import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveNgIfAndNgForComponent } from './directive-ng-if-and-ng-for.component';

describe('DirectiveNgIfAndNgForComponent', () => {
  let component: DirectiveNgIfAndNgForComponent;
  let fixture: ComponentFixture<DirectiveNgIfAndNgForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectiveNgIfAndNgForComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectiveNgIfAndNgForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
