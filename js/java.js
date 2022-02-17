const API = "https://jsonplaceholder.typicode.com/users";

const getData = (api) => {
  return fetch(api)
    .then((response) => response.json())
    .then((json) => {
      llenarDatos(json.results);
    })
    .catch((error) => {
      console.log("Error", error);
    });
};

const llenarDatos = (data) => {
  let html = "";
  data.forEach((pj) => {
    html += '<div class="card" style="width: 18rem;">';
    html += '<ul class="list-group list-group-flush">';
    html += `<li class="list-group-item">${pj.name}</li>`;
    html += `<li class="list-group-item">${pj.email}</li>`;
    html += `<li class="list-group-item">${pj.city}</li>`;
    html += "</ul>";
    html += "</div>";
  });

  document.getElementById("datosPersonajes").innerHTML = html;
};

getData(API);
