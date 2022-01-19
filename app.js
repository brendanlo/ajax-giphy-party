"use strict";

$('#giphy-form').on('submit', makeSearch);

/** makeSearch grabs the #search-term value and makes a call to the Giphy API,
 * then passes the first gif URL to appendGif
 */
async function makeSearch(evt) {
    evt.preventDefault();

    let searchTerm = $('#search-term').val();
    let searchParams = { q: searchTerm, api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym" };
    console.log("params = ", { searchParams });
    let response = await axios.get(
        'http://api.giphy.com/v1/gifs/search?', { params: searchParams });
    console.log("response: ", response.data);

    appendGif(response.data[0].embed_url);
}

/** appendGif takes a string URL argument, then creates an img
 *  element, sets the source URL to the gifURL, and appends it to
 * the #gifs-container div
 */

function appendGif(gifUrl) {
    let $newGifImg = $(`<img class = 'gif' src = ${gifUrl}>`);
    $("#gifs-container").append($newGifImg);
}