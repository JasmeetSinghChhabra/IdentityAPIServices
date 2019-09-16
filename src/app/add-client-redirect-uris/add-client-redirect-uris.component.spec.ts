import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClientRedirectUrisComponent } from './add-client-redirect-uris.component';

describe('AddClientRedirectUrisComponent', () => {
  let component: AddClientRedirectUrisComponent;
  let fixture: ComponentFixture<AddClientRedirectUrisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddClientRedirectUrisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddClientRedirectUrisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
