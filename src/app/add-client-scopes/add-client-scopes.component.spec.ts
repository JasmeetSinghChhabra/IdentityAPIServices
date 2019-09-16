import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClientScopesComponent } from './add-client-scopes.component';

describe('AddClientScopesComponent', () => {
  let component: AddClientScopesComponent;
  let fixture: ComponentFixture<AddClientScopesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddClientScopesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddClientScopesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
