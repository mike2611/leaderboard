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

const clearInputs = (name, score) => {
  name.value = '';
  score.value = '';
};

const hideSmall = () => {
  const small = document.querySelector('#score-error');
  small.classList.add('d-none');
};

const validateInputs = (name, score) => {
  const small = document.querySelector('#score-error');

  if (!Number.isInteger(Number(score.value))) {
    small.classList.remove('d-none');
    small.innerText = 'Your ELO puntation should be an integer number';
  } else if (score.value > 4000) {
    small.classList.remove('d-none');
    small.innerText = 'The biggest ELO puntation you can add is 4000';
  } else if (score.value < 1) {
    small.classList.remove('d-none');
    small.innerText = 'The lowest ELO puntation you can add is 1';
  } else {
    const userScore = { user: name.value, score: score.value };
    addScore(userScore);
    clearInputs(name, score);
  }
};

export default () => {
  hideSmall();
  const name = document.querySelector('#name');
  const score = document.querySelector('#score');
  validateInputs(name, score);
};
