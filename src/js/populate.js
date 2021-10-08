import { getScores } from './http';

import icons from './icons';

import loader from './loader';

const saveScores = async () => {
  let scores = [];

  try {
    scores = await getScores();
  } catch (e) {
    throw new Error(`Error getting scores data: ${e}`);
  }

  return scores;
};

const populateScores = (userScores) => {
  loader();
  const table = document.querySelector('#table-body');
  table.innerHTML = '';
  let index = 0;
  userScores.forEach((userScore) => {
    if (userScore.score < 4000 && userScore.score > 0 && /[a-zA-Z]/.test(userScore.user)) {
      const span = icons(index += 1);
      const tr = document.createElement('tr');
      tr.innerHTML = `
      <th class="d-flex align-items-center text-capitalize" scope="row">
        ${span}${userScore.user}
      </th>
      <td >${userScore.score}</td>`;
      table.appendChild(tr);
    }
  });
};

export default async () => {
  const results = await saveScores();
  const userScores = results.result;
  populateScores(userScores);
};
