const img = document.querySelector('img');

const img = document.querySelector('img');
fetch('https://api.giphy.com/v1/gifs/translate?api_key=XRVczzOZqT3VCrsH8ZL2ncdQabfMRNT7&s=cats', {mode: 'cors'})
    .then(function(response) {
      console.log(response.json());
});