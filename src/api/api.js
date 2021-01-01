export const apiCallGet = (link) =>
  fetch(link).then((response) => response.json());
