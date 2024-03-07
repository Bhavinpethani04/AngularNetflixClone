import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

const options = {
  params: {
    include_adult: 'false',
    include_video: 'true',
    language: 'en-US',
    page: '1',
    sort_by: 'popularity.desc',
  },
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZmM2N2E2Y2FiMGQwNDkzYjQ3ZDVhYjc4MGI2NjEyMSIsInN1YiI6IjY0Yjk3ODE0YWI2ODQ5MDEzOTE0YzJmNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RqOKAq3ZvRPsX91RZa9NXP7q4lREnZThonzt2gBydco',
  },
};

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  http = inject(HttpClient);

  getMovies() {
    return this.http.get<any>(
      'https://api.themoviedb.org/3/discover/movie',
      options
    );
  }

  getTrandingMovies() {
    return this.http.get<any>(
      'https://api.themoviedb.org/3/trending/movie/day?',
      options
    );
  }

  getTopRatedMovies() {
    return this.http.get<any>(
      'https://api.themoviedb.org/3/movie/top_rated?',
      options
    );
  }

  upcomingMovies() {
    return this.http.get<any>(
      'https://api.themoviedb.org/3/movie/upcoming?',
      options
    );
  }
}
