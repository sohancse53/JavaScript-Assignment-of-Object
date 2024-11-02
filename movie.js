class MovieCollectionManager {
    movies = [];
  
    addMovie(movie) {
      this.movies.push(movie);
    }
  
    findMoviesByDirector(director) {
      return this.movies.filter(function(movie) {
        return movie.director === director;
      });
    }
  
    getMoviesReleasedAfterYear(year) {
      return this.movies.filter(function(movie) {
        return movie.year > year;
      });
    }
  }
  

  const manager = new MovieCollectionManager();
  
  manager.addMovie({ title: "The Shawshank Redemption", director: "Frank Darabont", year: 1994, rating: 9.3 });
  manager.addMovie({ title: "The Godfather", director: "Francis Ford Coppola", year: 1972, rating: 9.2 });
  manager.addMovie({ title: "The Dark Knight", director: "Christopher Nolan", year: 2008, rating: 9.0 });
  

  const nolanMovies = manager.findMoviesByDirector("Christopher Nolan");
  console.log(nolanMovies);

  const recentMovies = manager.getMoviesReleasedAfterYear(2000);
  console.log(recentMovies);