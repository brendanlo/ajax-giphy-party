"use strict";

$('#search-btn').on('click', makeSearch);

async function makeSearch() {
    let searchTerm = $('#search-term').val();
    let params = { q: searchTerm };
    console.log("params = ", params);
    let response = await axios.get(
        'http://api.giphy.com/v1/gifs/search?', params);
        console.log("response: ", response.data);

    appendGif(response.data[0].embed_url);
}

function appendGif (gifUrl) {
    let $newGifImg = $(`<img class = 'gif' src = ${gifUrl}>`);
    $("#gifs-container").append($newGifImg);
}