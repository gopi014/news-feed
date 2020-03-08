import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import {HttpClientTestingModule} from '@angular/common/http/testing'
import { HomePage } from './home.page';
import { IonicStorageModule } from '@ionic/storage';
import { Network } from '@ionic-native/network/ngx';
import { RouterTestingModule } from '@angular/router/testing';
describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePage ],
      imports: [HttpClientTestingModule,IonicStorageModule.forRoot(),IonicModule.forRoot(),RouterTestingModule.withRoutes(
        [{path: '', component:HomePage}])],
      providers:[Network]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
