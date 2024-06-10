const db = require('../db');
const Movie = require('../models/movie');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {
    const movies = [
      { 
        title: 'Inception', 
        director: 'Christopher Nolan', 
        releaseYear: 2010, 
        genre: 'Action', 
        summary: 'A thief who enters the dreams of others to steal secrets from their subconscious.', 
        poster: 'inception-poster.jpg',
        actors: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Ellen Page'] 
      },
      { 
        title: 'The Shawshank Redemption', 
        director: 'Frank Darabont', 
        releaseYear: 1994, 
        genre: 'Drama', 
        summary: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.', 
        poster: 'shawshank-redemption-poster.jpg',
        actors: ['Tim Robbins', 'Morgan Freeman'] 
      },
      { 
        title: 'The Godfather', 
        director: 'Francis Ford Coppola', 
        releaseYear: 1972, 
        genre: 'Crime', 
        summary: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.', 
        poster: 'godfather-poster.jpg',
        actors: ['Marlon Brando', 'Al Pacino', 'James Caan'] 
      },
      { 
        title: 'La La Land', 
        director: 'Damien Chazelle', 
        releaseYear: 2016, 
        genre: 'Musical', 
        summary: 'While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.', 
        poster: 'la-la-land-poster.jpg',
        actors: ['Ryan Gosling', 'Emma Stone'] 
      },
      { 
        title: 'Pulp Fiction', 
        director: 'Quentin Tarantino', 
        releaseYear: 1994, 
        genre: 'Crime', 
        summary: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.', 
        poster: 'pulp-fiction-poster.jpg',
        actors: ['John Travolta', 'Uma Thurman', 'Samuel L. Jackson'] 
      }
    ];

  await Movie.insertMany(movies);
  console.log('Created movies!');
};

main().catch(console.error).finally(() => db.close());











