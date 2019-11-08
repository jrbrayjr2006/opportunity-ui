import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { PactWeb, Matchers } from "@pact-foundation/pact-web";
import { OppDetailModel } from '../model/oppdetail.model';
import { OppDetailService } from './opp-detail.service';

describe('OppDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ]
  }));

  it('should be created', () => {
    const service: OppDetailService = TestBed.get(OppDetailService);
    expect(service).toBeTruthy();
  });
});

describe('OppDetailService PACT', () => {
  let provider:PactWeb;
  beforeAll(function(done) {
    provider = new PactWeb({
      consumer: 'opportunity-ui',
      provider: 'opportunity-service',
      port: 1234,
      host: 'localhost'
    });

    // require for slower CI environments
    setTimeout(done, 2000);
    //
    provider.removeInteractions();
  });

  afterAll(function(done) {
    provider.finalize()
    .then(function() {
      done();
    }, function(err) {
      done.fail(err);
    });
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [
        OppDetailService
      ]
    });
  });

  afterEach((done) => {
    provider.verify().then(done, e => done.fail(e));
  });

  describe('getPatientDetails()', () => {
    const expectedOpportunityDetail: OppDetailModel = {
      patientId: "",
    patientName: "",
    preferredLanguage: "",
    Gender: "",
    customerPref: "",
    patientPharmacyType: "",
    delivery: "",
    medicationType: "",
    home_store: "",
    DOB: "",
    Age: 0,
    phone: "",
    text: "",
    altphone: "",
    email: "",
    adress: "",
    callingDetails: {
      preferredTime: "",
      callAttempt: 0,
      opportunities: 0,
    },
    otherDetails: {
      notes: [{
          dateofnotes: "",
          discription: "",
          type: "",
          pharmasist: "",
          }, {
              viewmore: "",
          }
      ],
        conditionsdiagnosis: [{
        }],
        problemlist: [{
        }],
        cargiverdetails: [{
        }],
        RxHistory: [{
        }],
        interactionHistory: [{
        }]
      }
    };

    beforeAll((done) => {
      provider.addInteraction({
        state: `provider returns an opportunity detail`,
        uponReceiving: 'a request to GET an opportunity detail',
        withRequest: {
          method: 'GET',
          path: '/opportunity-service/opportunities'
        },
        willRespondWith: {
          status: 200,
          body: Matchers.somethingLike({
              oppdetail: expectedOpportunityDetail
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        }
      }).then(done, error => done.fail(error));
    });

    it('should get an opportunity detail', (done) => {
      const service: OppDetailService = TestBed.get(OppDetailService);
      service.getPatientDetails().subscribe( response => {
        console.info('requested opportunity details');
        done();
      }, error => {
        console.error('request for opportunity details failed!');
        done.fail(error);
      });
    });
  });
});
