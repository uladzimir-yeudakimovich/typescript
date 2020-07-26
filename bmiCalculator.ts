export const calculateBmi = (a: number, b: number) : string => {
  const bmi = b / (a / 100) ** 2;
  if (bmi < 18.5) {
    return 'Mild Thinness';
  } else if (18.5 <= bmi && bmi < 25) {
    return 'Normal (healthy weight)';
  }
  return 'Overweight';
};