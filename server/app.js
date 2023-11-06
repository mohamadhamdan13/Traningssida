const express = require('express');
const app = express();
const db = require('./db'); // Importera din anslutningsmodul
const dbOperations = require('./dbOperations'); // Importera din modul för databasoperationer




// Definiera API-rutter
app.get('/api/exercises', (req, res) => {
  const exercises = dbOperations.getExercises();
  res.json(exercises);
});

app.post('/api/exercises', (req, res) => {
  const exercise = req.body;
  dbOperations.createExercise(exercise);
  res.json({ message: 'Träningsövning skapad' });
});
