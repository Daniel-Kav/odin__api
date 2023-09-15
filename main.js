const img = document.querySelector('img');
const searchInput = document.querySelector('#search');
const searchBtn = document.querySelector('#searchBtn');
const newImageBtn = document.querySelector('#newImageBtn');
const apiKey = 'XRVczzOZqT3VCrsH8ZL2ncdQabfMRNT7'
//fetching the image from giffy
fetch('https://api.giphy.com/v1/gifs/translate?api_key=XRVczzOZqT3VCrsH8ZL2ncdQabfMRNT7&s=cats', {mode: 'cors'})
  .then(function(response) {
    return response.json();
  })
  .then(function(response) {
    img.src = response.data.images.original.url;
  });

//function to fetch  a random GIF based on the search term
function fetchRandomGif(searchTerm) {
  const apiUrl = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${searchTerm}`;

  fetch(apiUrl,{mode: 'cors'})
    .then(function (response) {
      if(!response.ok){
        throw new Error('Giphy API request Failed');
      }
      return response.json();
    })
    .then(function (response) {
      if (response.data && response.data.images && response.data.images.original) {
        img.src = response.data.images.original.url;
      }else {
        //display a default image or an error message
        img.src = 'default-image.png';
      }
    })
    .catch(function(err) {
      console.error(err);
      //handle error
      img.src = 'error-image.png';
    });
}

//initial fetch when the  page loads
fetchRandomGif('cats');

// event listener for the search button
searchBtn.addEventListener('click', function() {
  const searchTerm = searchInput.value.trim();
  if (searchTerm!=='') {
    fetchRandomGif(searchTerm); //
  }
});

// event listener for the new image button
newImageButton.addEventListener('click', function() {
  const currentSearchTerm = searchInput.value.trim();
  if (currentSearchTerm !== '') {
    fetchRandomGif(currentSearchTerm);
  }else {
    fetchRandomGif('cats');
  }
});