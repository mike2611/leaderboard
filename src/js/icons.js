export default (index) => {
  let span = '';
  if (index % 2 !== 0) {
    span = '<span class="material-icons me-2 text-dark icon-size">circle</span>';
  } else {
    span = '<span class="material-icons me-2 icon-size">circle</span>';
  }
  return span;
};
