const db = require('../db');
const MovieReview = require('../models/reviews');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {
  const movieReviews = [
    { movieId: '60f9c9b1d73b4415d5c24d1a', score: 9, comment: 'Excellent movie!' }, // Replace '60f9c9b1d73b4415d5c24d1a' with the actual ObjectId of the movie
    { movieId: '60f9c9b1d73b4415d5c24d1b', score: 8, comment: 'Good movie!' },     // Replace '60f9c9b1d73b4415d5c24d1b' with the actual ObjectId of the movie
    // Add more reviews as needed
  ];

  await MovieReview.insertMany(movieReviews);
  console.log('Created movie reviews!');
};

main().catch(console.error).finally(() => db.close());