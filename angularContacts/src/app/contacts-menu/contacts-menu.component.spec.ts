import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsMenuComponent } from './contacts-menu.component';

describe('ContactsMenuComponent', () => {
  let component: ContactsMenuComponent;
  let fixture: ComponentFixture<ContactsMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactsMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
