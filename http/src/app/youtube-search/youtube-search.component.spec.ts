import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, inject, TestBed, tick } from '@angular/core/testing';
import { SearchBoxComponent } from './search-box.component';
import { SearchResultComponent } from './search-result.component';

import { YoutubeSearchComponent } from './youtube-search.component';
import { YoutubeSearchService, YOUTUBE_API_KEY, YOUTUBE_API_URL } from './youtube-search.service';

const defaultResponse = {
  items: [
    {
      id: {videoId: 'VIDEO_ID'},
      snippet: {
        title: 'TITLE',
        description: 'DESCRIPTION',
        thumbnails: {
          high: {url: 'THUMBNAIL_URL'}
        }
      }
    }
  ]
}

describe('YoutubeSearchComponent', () => {
  let component: YoutubeSearchComponent;
  let fixture: ComponentFixture<YoutubeSearchComponent>;

  beforeEach(fakeAsync (() => {
    TestBed.configureTestingModule({
      declarations: [ YoutubeSearchComponent, SearchResultComponent, SearchBoxComponent ],
      imports: [HttpClientTestingModule],
      providers: [YoutubeSearchService,
        {provide: YOUTUBE_API_KEY, useValue: 'YOUTUBE_API_KEY'},
        {provide: YOUTUBE_API_URL, useValue: 'YOUTUBE_API_URL'}
      ]
    })
  }));

  describe('search', () => {
    function search(term: string, response: any, callback) {
      return inject([YoutubeSearchService, HttpTestingController],
        fakeAsync((service: YoutubeSearchService, httpMock: HttpTestingController) => {
          let res;

          service.search(term).subscribe(_res => {
            res = _res;
          });

          const req = httpMock.expectOne({method: 'GET'});
          req.flush(response);

          tick();

          callback(req.request, res);
        })
      );
    }
    
    it('parses YouTube video id',
      search('hey', defaultResponse, (req, res) => {
        const video = res[0];
        expect(video.id).toEqual('VIDEO_ID')
      })
    );

    it('parses YouTube video title',
      search('hey', defaultResponse, (req, res) => {
        const video = res[0];
        expect(video.title).toEqual('TITLE');
      })
    );

    it('parses YouTube video description',
      search('hey', defaultResponse, (req, res) => {
        const video = res[0];
        expect(video.description).toEqual('DESCRIPTION');
      })
    );

    it('parses YouTube video thumbnail',
      search('hey', defaultResponse, (req, res) => {
        const video = res[0];
        expect(video.description).toEqual('DESCRIPTION');
      })
    );

    it('sends the query',
      search('term', defaultResponse, (req,res) => {
        expect(req.url).toContain('q=term');
      })
    );

    it('sends the API key',
      search('term', defaultResponse, (req,res) => {
        expect(req.url).toContain('key=YOUTUBE_API_KEY');
      })
    );

    it('uses the provided YouTube URL',
      search('term', defaultResponse, (req,res) => {
        expect(req.url).toMatch(/^YOUTUBE_API_URL\?/);
      })
    )

  })
});
