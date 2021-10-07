import { getScores } from './http';

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
  const table = document.querySelector('#table-body');
  table.innerHTML = '';
  userScores.forEach((userScore) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <th class="text-capitalize" scope="row">${userScore.user}</th>
    <td>${userScore.score}</td>`;
    table.appendChild(tr);
  });
};

export default async () => {
  const results = await saveScores();
  const userScores = results.result;
  populateScores(userScores);
};
