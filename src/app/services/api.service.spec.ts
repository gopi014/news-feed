import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing'
import { ApiService } from './api.service';
import { IonicStorageModule } from '@ionic/storage';
import { Network } from '@ionic-native/network/ngx';

describe('ApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule,IonicStorageModule.forRoot()],
    providers: [ApiService,Network]
  }));

  it('should be created', () => {
    const service: ApiService = TestBed.get(ApiService);
    expect(service).toBeTruthy();
  });
});
