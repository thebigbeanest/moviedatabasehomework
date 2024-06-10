

const express = require('express');
const mongoose = require('mongoose');
const Actor = require('./models/actor');
const Movie = require('./models/movie');
const MovieReview = require('./models/movieReview');

const app = express();
const PORT = 3001;

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/movieDatabase', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error) => console.error('Error connecting to MongoDB:', error.message));

// Routes

app.get('/', async (req, res) => {
  res.send('Welcome to the movie database!');
});

// Actor routes
app.get('/actors', async (req, res) => {
  try {
    const actors = await Actor.find();
    res.json(actors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get('/actors/:id', async (req, res) => {
  try {
    const actor = await Actor.findById(req.params.id);
    if (!actor) return res.status(404).json({ message: 'Actor not found' });
    res.json(actor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Movie routes
app.get('/movies', async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get('/movies/:id', async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) return res.status(404).json({ message: 'Movie not found' });
    res.json(movie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Movie review routes
app.get('/reviews', async (req, res) => {
  try {
    const reviews = await MovieReview.find();
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get('/reviews/:id', async (req, res) => {
    try {
      const review = await MovieReview.findById(req.params.id);
      if (!review) return res.status(404).json({ message: 'Review not found' });
      res.json(review);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  // Error handling middleware
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
  });

// Connect to MongoDB and start the server
mongoose.connect('mongodb://localhost:27017/movieDatabase', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error) => console.error('Error connecting to MongoDB:', error.message));