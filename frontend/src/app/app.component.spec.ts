import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule, HttpHeaders} from "@angular/common/http";
import {of} from "rxjs";

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let httpClient: HttpClient;


  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule,
      MatCheckboxModule,
      MatSlideToggleModule,
      HttpClientModule,
      ReactiveFormsModule
    ],
    declarations: [AppComponent]
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    httpClient = TestBed.inject(HttpClient);
    fixture.detectChanges();
  })


  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    expect(app).toBeTruthy();
  });

  it('should find vowels correctly', () => {

    component.input = new FormControl('Hello World');
    component.sliderChecked = false;
    component.isVowelChecked = true;
    component.output = new FormControl('');
    component.submit();

    expect(component.output.value).toBe('Letter E appears 1 times \n' +
      'Letter O appears 2 times \n');
  });

  it('should find 0 vowels', () => {

    component.input = new FormControl('Lymph');
    component.sliderChecked = false;
    component.isVowelChecked = true;
    component.output = new FormControl('');
    component.submit();

    expect(component.output.value).toBe('There are 0 vowels in this sentence');
  });

  it('should find consonants correctly', () => {

    component.input = new FormControl('Hello World');
    component.sliderChecked = false;
    component.isVowelChecked = false;
    component.output = new FormControl('');
    component.submit();

    expect(component.output.value).toBe('Letter H appears 1 times \n' +
      'Letter L appears 3 times \n' +
      'Letter W appears 1 times \n' +
      'Letter R appears 1 times \n' +
      'Letter D appears 1 times \n');
  });


  it('using HTTP should return correct answer', fakeAsync(() => {
    component.input = new FormControl('abb');
    component.sliderChecked = true;
    component.isVowelChecked = true;
    const mockResponse = [{key: 'a', value: 1}];
    spyOn(httpClient, 'get').and.returnValue(of(mockResponse));

    component.submit();
    tick();

    expect(httpClient.get).toHaveBeenCalledOnceWith(
      `${component.baseUrl}/${component.isVowelChecked ? 'vowels' : 'consonants'}/${component.input.value}`
    );
    expect(component.output.value).toBe('Letter A appears 1 times \n');
  }));
});
