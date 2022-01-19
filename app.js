"use strict";

$('#giphy-form').on('submit', makeSearch);

/** makeSearch grabs the #search-term value and makes a call to the Giphy API,
 * then passes the first gif URL to appendGif
 */
async function makeSearch(evt) {
    evt.preventDefault();

    let searchTerm = $('#search-term').val();
    let searchParams = { q: searchTerm, api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym" };
    console.log("params = ", searchParams);
    let response = await axios.get(
        'http://api.giphy.com/v1/gifs/search?', { params: searchParams });
    console.log("response: ", response.data);
    console.log("this should FINALLY be the URL for the first gif:", response.data.data[0].images.original.url); //bc Giphy API said so
    appendGif(response.data.data[0].images.original.url); 
}

/** appendGif a gif URL string argument, 
 * then creates an img element with src set to gif URL 
 * and appends it to the #gifs-container div
 */

function appendGif(gifUrl) {
    console.log("we're inside the appendGif function!! HELL YEAH!!");
    let $newGifImg = $(`<img class = 'gif' src = ${gifUrl}>`);
    $("#gifs-container").append($newGifImg);
}