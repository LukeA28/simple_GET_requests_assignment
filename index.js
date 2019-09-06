'use strict';

function getDogImage() {
  fetch(`https://dog.ceo/api/breeds/image/random/${$('.value').val()}`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson.message))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
    console.log(responseJson);
    //push the image url into an array
    for (let i = 0; i < $('.value').val(); i++) {
        $('.results').append(`<img src="${responseJson[i]}" alt="random_dog" class="result_image">`)
    }
    //display the results section
    $('.results').removeClass('hidden');
  }

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    $('.results').empty();
    $('.results').text('Look at this dog!');
    getDogImage();
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});