import { async, ComponentFixture, fakeAsync, inject, TestBed } from '@angular/core/testing';

import { MoreHttpRequestsComponent } from './more-http-requests.component';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('MoreHttpRequestsComponent', () => {
  let component: MoreHttpRequestsComponent;
  let fixture: ComponentFixture<MoreHttpRequestsComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreHttpRequestsComponent ],
      imports: [ HttpClientTestingModule ]
    })
  });

  beforeEach(fakeAsync(
    inject([HttpTestingController], _httpMock => {
      fixture = TestBed.createComponent(MoreHttpRequestsComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
      httpMock = _httpMock;
    })
  ));

  afterEach(
    inject([HttpTestingController], (httpMock: HttpTestingController) => {
      httpMock.verify();
    })
  )


  it('performs a POST', fakeAsync(() => {
    component.makePost();

    const req = httpMock.expectOne(
      'https://631b2df4dc236c0b1eef49b9.mockapi.io/api/v1/posts'
    );

    expect(req.request.method).toEqual('POST');
    req.flush({response: 'OK'});
    expect(component.data).toEqual({response: 'OK'});

    httpMock.verify();
  }));

  it('performs a DELETE', fakeAsync(( )=> {
    component.makeDelete();

    const req = httpMock.expectOne(
      'https://631b2df4dc236c0b1eef49b9.mockapi.io/api/v1/posts/1'
    );

    expect(req.request.method).toEqual('DELETE');
    req.flush({response: 'OK'});
    expect(component.data).toEqual({response: 'OK'});

    httpMock.verify();
  }))

  it('sends correct headers', fakeAsync(() => {
    component.makeHeaders();

    const req = httpMock.expectOne(
      req =>
        req.headers.has('X-HACI-TOKEN') &&
        req.headers.get('X-HACI-TOKEN') == 'haci'
    );

    req.flush({response: 'OK'});
    expect(component.data).toEqual({response: 'OK'});

    httpMock.verify();
  }))
});
