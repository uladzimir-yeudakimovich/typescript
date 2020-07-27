type Result = {
  periodLength: number,
  trainingDays: number,
  success: boolean,
  rating: number,
  ratingDescription: string,
  target: number,
  average: number
}

export const calculateExercises = (target: number, arr: Array<number>): Result => {
  const average = arr.reduce((acc, cur) => acc + cur, 0) / arr.length;
  const success = average > target;

  return {
    periodLength: arr.length,
    trainingDays: arr.filter(el => el > 0).length,
    success,
    rating: success ? 2 : 1,
    ratingDescription: success ? "good" : "bad",
    target,
    average
  };
};