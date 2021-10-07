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
  const smallScore = document.querySelector('#score-error');
  const smallName = document.querySelector('#name-error');
  smallScore.classList.add('d-none');
  smallName.classList.add('d-none');
};

const validateInputs = (name, score) => {
  const smallScore = document.querySelector('#score-error');
  const smallName = document.querySelector('#name-error');

  if (!Number.isInteger(Number(score.value))) {
    smallScore.classList.remove('d-none');
    smallScore.innerText = 'Your ELO puntation should be an integer number';
  } else if (score.value > 4000) {
    smallScore.classList.remove('d-none');
    smallScore.innerText = 'The biggest ELO puntation you can add is 4000';
  } else if (score.value < 1) {
    smallScore.classList.remove('d-none');
    smallScore.innerText = 'The lowest ELO puntation you can add is 1';
  } else if (!/[a-zA-Z]/.test(name.value)) {
    smallName.classList.remove('d-none');
    smallName.innerText = 'User name should contain at least one letter';
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
