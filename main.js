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