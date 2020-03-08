import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { of, Observable } from 'rxjs'
import {Location} from '@angular/common';
import { DetailsPage } from './details.page';
import { RouterTestingModule } from '@angular/router/testing';
import {ActivatedRoute, Router } from '@angular/router';

describe('DetailsPage', () => {
  let component: DetailsPage;
  let fixture: ComponentFixture<DetailsPage>;
  class ActivatedRouteMock {
    queryParams = new Observable(observer => {
      const urlParams = {
        param1: 'some',
        param2: 'params'
      }
      observer.next(urlParams);
      observer.complete();
    });
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsPage ],
      imports: [IonicModule.forRoot()],
      providers: [ {provide: Router, useClass: RouterStub},{provide:ActivatedRoute,useClass:ActivatedRouteMock}]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

class RouterStub{
  getCurrentNavigation(){
    return {
       extras: {
          state:{
            article: 'someId',
          }
        }
      }
    }
 }

 