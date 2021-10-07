const baseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';
const id = 'TLqf551ls3wUDs2hL2TO';
const scoresURL = `${baseURL}/${id}/scores/`;

export const getScores = async () => {
  const response = await fetch(scoresURL, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  const userScores = await response.json();
  return userScores;
};

export const setScores = (userScore) => {
  const response = fetch(scoresURL, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user: userScore.user, score: userScore.score }),
  });
  return response;
};
