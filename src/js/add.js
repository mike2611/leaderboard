import { setScores } from './http';
import populate from './populate';

const addScore = async (userScore) => {
  try {
    await setScores(userScore);
    populate();
  } catch (e) {
    throw new Error(`Error setting the score: ${e}`);
  }
};

export default () => {
  const name = document.querySelector('#name');
  const score = document.querySelector('#score');

  const userScore = { user: name.value, score: score.value };
  addScore(userScore);
};
