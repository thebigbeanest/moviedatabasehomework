const db = require('../db');
const Actor = require('../models/actor');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {
    const actors = [
        { name: 'Leonardo DiCaprio', age: 47, isAlive: true, movies: ['Inception'] },
        { name: 'Tom Hanks', age: 65, isAlive: true, movies: ['The Shawshank Redemption'] },
        { name: 'Al Pacino', age: 81, isAlive: true, movies: ['The Godfather'] },
        { name: 'Meryl Streep', age: 72, isAlive: true, movies: ['The Devil Wears Prada'] },
        { name: 'Brad Pitt', age: 58, isAlive: true, movies: ['Fight Club'] },
        { name: 'Angelina Jolie', age: 46, isAlive: true, movies: ['Mr. & Mrs. Smith'] },
        { name: 'Denzel Washington', age: 66, isAlive: true, movies: ['Training Day'] },
        { name: 'Johnny Depp', age: 58, isAlive: true, movies: ['Pirates of the Caribbean'] },
        { name: 'Emma Stone', age: 32, isAlive: true, movies: ['La La Land'] },
        { name: 'Robert Downey Jr.', age: 56, isAlive: true, movies: ['Iron Man'] }
      ];

  await Actor.insertMany(actors);
  console.log('Created actors!');
};

main().catch(console.error).finally(() => db.close());