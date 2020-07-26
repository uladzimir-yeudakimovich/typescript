import express from 'express';
import { calculateBmi } from './bmiCalculator';
import { calculator } from './calculator';
const app = express();

app.get('/bmi', (req, res) => {
  const { height, weight } = req.query;
  try {
    const bmi = calculateBmi(Number(height), Number(weight));
    res.send({ ...req.query, bmi });
  } catch (e) {
    res.send({ error: "malformatted parameters" });
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

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});