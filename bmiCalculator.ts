const calculateBmi = (a: number, b: number) : string => {
  const bmi = b / (a / 100) ** 2;
  if (bmi < 18.5) {
    return 'Low (healthy weight)';
  } else if (18.5 <= bmi && bmi < 25) {
    return 'Normal (healthy weight)';
  } else if (bmi >= 25) {
    return 'Obese (healthy weight)';
  }
}

try {
  console.log(calculateBmi(180, 74));
} catch (e) {
  console.log('Something went wrong, error message: ', e.message);
}