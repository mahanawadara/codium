import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { CalculateComponent } from './calculate.component';

describe('CalculateComponent', () => {
  let component: CalculateComponent;
  let fixture: ComponentFixture<CalculateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [CalculateComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should be 2', () => {
    expect(component._calculate('1 + 1')).toEqual(2);
  });


  it('should be 4', () => {
    expect(component._calculate('2 + 2')).toEqual(4);
  });

  it('should be 16', () => {
    expect(component._calculate('4 * 4')).toEqual(16);
  });

  it('should be Infinity', () => {
    expect(component._calculate('999/0')).toEqual(Infinity);
  });

  it('should be 0', () => {
    expect(component._calculate('0/999')).toEqual(0);
  });

  it('should be 1', () => {
    expect(component._calculate('2 - 1')).toEqual(1);
  });

  it('should be -1', () => {
    expect(component._calculate('1 - 2')).toEqual(-1);
  });

  it('should be 0.5', () => {
    expect(component._calculate('1 / 2')).toEqual(0.5);
  });

  it('should be 0.6', () => {
    expect(component._calculate('3 / 5')).toEqual(0.6);
  });


  it('should render Calculate in a h1 tag', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Calculate');
  }));

  it('should have button', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button')).toBeTruthy();
  }));

  it('should have input tag', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('input')).toBeTruthy();
  }));

});
