import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageInterfaceComponent } from './page-interface.component';

describe('PageInterfaceComponent', () => {
  let component: PageInterfaceComponent;
  let fixture: ComponentFixture<PageInterfaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageInterfaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
