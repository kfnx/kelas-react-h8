fetch('https://ghibliapi.herokuapp.com/films')
  .then(response => {
    return response.json()
  })
  .catch(err => {
    console.error('error');
  });