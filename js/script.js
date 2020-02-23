const baseUrl = "https://rickandmortyapi.com/api/";
const charUrl = `${baseUrl}character/`;

window.addEventListener("load", event => {
  console.log("page is fully loaded");
});

function viewCharacters(response) {
  return response.json();
}

function allCharacters(json) {
  const characterLoad = json.results;
  console.dir(json);

  const containerResult = document.querySelector(".results");

  let html = "";

  characterLoad.forEach(function(result) {
    let typeOf = result.type;
    if (result.type.length > 0) {
    } else {
      typeOf = "Unknown";
    }

    html += `<div class="col-sm-6 col-md-4 col-lg-3">                
      <div class="card">
          <img class="image" src="${result.image}" alt=${result.name}>
          <div class="details">
              <h4 class="name">${result.name}</h4>
              <p>Type: ${typeOf}</p>
              <p>Episode count: ${result.episode.length}</p>                                       
              <a class="btn btn-primary" href="details.html?id=${result.id}">Details</a>
          </div>
      </div>
  </div>`;
  });

  containerResult.innerHTML = html;
}

function inCaseError(error) {
  console.log(error);
}

fetch(charUrl)
  .then(viewCharacters)
  .then(allCharacters)
  .catch(inCaseError);