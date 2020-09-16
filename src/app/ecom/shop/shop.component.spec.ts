import {TestBed, ComponentFixture} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';

import {ShoppingComponent} from './Shopping.component';

let component: ShoppingComponent;
let fixture: ComponentFixture<ShoppingComponent>;

describe('App: Tmp', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ShoppingComponent],
      providers: []
    }).compileComponents();

    fixture = TestBed.createComponent(ShoppingComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

});
