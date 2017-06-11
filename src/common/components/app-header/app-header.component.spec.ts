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

  it('should display the input title as the header text.', async(() => {
    const fixture = TestBed.createComponent(AppHeaderComponent);
    let comp: AppHeaderComponent = fixture.componentInstance;
    comp.title = 'Momentz-4-ever';

    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('a.navbar-brand').textContent).toContain('Momentz-4-ever');
  }));
});
