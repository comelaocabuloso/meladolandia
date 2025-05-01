fetch('https://simceleridades.vercel.app/api/fragmentos')
  .then(response => response.json())
  .then(data => {
    document.querySelector('#simceleridade-widget p').textContent = data[0];
  });