import { TestBed, async } from '@angular/core/testing';
import { AppHeaderComponent } from './app-header.component';

describe('AppHeaderComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppHeaderComponent
      ],
    }).compileComponents();
  }));

  it('should create the App header component', async(() => {
    const fixture = TestBed.createComponent(AppHeaderComponent);
    const appHeader = fixture.debugElement.componentInstance;
    expect(appHeader).toBeTruthy();
  }));

  it('should display the header text "Momentz-4-Ever".', async(() => {
    const fixture = TestBed.createComponent(AppHeaderComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Momentz-4-ever');
  }));
});
