import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JourneyOverviewComponent } from './journey-overview.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { MockApiService } from '../../shared/services/mock.api.service';
import { UserService } from '../../shared/services/user.service';
import { MockUserService } from '../../shared/services/mock.user.service';

describe('JourneyOverviewComponent', () => {
  let component: JourneyOverviewComponent;
  let fixture: ComponentFixture<JourneyOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule],
      declarations: [ JourneyOverviewComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [
        {provide: ApiService, useClass: MockApiService},
        {provide: UserService, useClass: MockUserService}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JourneyOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
