import '../style.css';

import populate from './populate';

import add from './add';

populate();

const refreshBtn = document.querySelector('#refresh');
refreshBtn.addEventListener('click', () => {
  populate();
});

const submitBtn = document.querySelector('#submit');
submitBtn.addEventListener('click', () => {
  add();
});
