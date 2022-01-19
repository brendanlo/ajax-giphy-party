"use strict";

$('#search-btn').on('click', makeSearch);

async function makeSearch() {
    let searchTerm = $('#search-term').val();
    let params = { q: searchTerm };
    let response = await axios.get(
        'http://api.giphy.com/v1/gifs/search?', params);

    console.log("response: ", response);

    appendGif(response.data);
}
