import express from 'express';
const app = express();
app.use(express.json());

import { calculateBmi } from './bmiCalculator';
import { calculator } from './calculator';
import { calculateExercises } from './exerciseCalculator';

app.get('/bmi', (req, res) => {
  const { height, weight } = req.query;
  try {
    const bmi = calculateBmi(Number(height), Number(weight));
    res.send({ ...req.query, bmi });
  } catch (e) {
    res.send({ error: 'Malformatted parameters' });
  }
});

app.get('/calculate', (req, res) => {
  const { value1, value2, op } = req.query;
  try {
    const result = calculator(Number(value1), Number(value2), String(op));
    res.send({ result });
  } catch (e) {
    res.send({ error: `Something went wrong, error message: ${e.message}` });
  }
});

app.get('/exercises', (req, res) => {
  const { target, daily_exercises } = req.query;
  try {
    const result = calculateExercises(Number(target), daily_exercises);
    res.send({ result });
  } catch (e) {
    res.send({ error: 'Parameters missing' });
  }
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});