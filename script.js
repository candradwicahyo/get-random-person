window.addEventListener('DOMContentLoaded', () => {
  
  async function generateData() {
    // ambil data
    const data = await getData();
    // uraikan data
    const {
      dob: { age }, 
      email,
      location: { city, country, state },
      name: { first, last },
      picture: { large }
    } = data;
    // ambil nama depan dan belakamg
    const name = `${first} ${last}`;
    // tampilkan data
    showData(name, age, city, state, country, email, large)
  }
  
  generateData();
  
  function getData() {
    // fetch data
    return fetch('https://randomuser.me/api/')
      // parsing menjadi JSON
      .then(response => response.json())
      // ambil data
      .then(response => response.results[0]);
  }
  
  function showData(name, age, city, state, country, email, picture) {
    document.querySelector('.name').textContent    = name;
    document.querySelector('.age').textContent     = `${age} years old`;
    document.querySelector('.city').textContent    = city;
    document.querySelector('.state').textContent   = state;
    document.querySelector('.country').textContent = country;
    document.querySelector('.email').textContent   = email;
    document.querySelector('.image').src           = picture;
  }
  
  // generate data baru
  const generateButton = document.querySelector('.generate');
  generateButton.addEventListener('click', generateData);
  
});