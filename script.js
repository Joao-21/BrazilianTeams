const about = document.querySelector(".about-center");
const loading = document.getElementById("loader");

let teams = [];

async function fetchTeamsApi() {
  await fetch("https://my-json-server.typicode.com/Joao-21/backendTeams/db")
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      teams = response.teams;
    })
    .catch((err) => console.log(err));
}

const sectionCenter = document.querySelector(".about-center");

window.addEventListener("DOMContentLoaded", async function () {
  loader.style.display = "flex";
  await fetchTeamsApi();
  loader.style.display = "none";

  let displayTeams = teams.map((team) => {
    return `<div class="team-content">
                <div class="img-container">
                  <div><h2>${team.label}</h2></div>
                  <img src="./assets/${team.name}.jpg" alt="about picture" class="img-team"/>
                </div>
                <article class="about">
                    <div class="btn-container">
                        <button class="tab-btn active" data-id="informations-${team.name}" id="informations-${team.name}">Informations</button>
                        <button class="tab-btn" data-id="titles-${team.name}" id="titles-${team.name}">Titles</button>
                        <button class="tab-btn" data-id="history-${team.name}" id="history-${team.name}">History</button>
                    </div>
                    <article class="about-content" id="content-${team.name}">
                        <div class="content active" id="content-informations-${team.name}">
                            <p>${team.informations}</p>
                        </div>
                        <div class="content" id="content-titles-${team.name}">
                            <p>${team.titles}</p>
                        </div>
                        <div class="content" id="content-history-${team.name}">
                            <p>${team.history}</p>
                        </div>
                    </article>
                </article>
              </div>`;
  });

  displayTeams = displayTeams.join("");
  sectionCenter.innerHTML = displayTeams;
});

about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;

  if (id) {
    const buttonAndTeam = id.split("-");
    const buttonName = buttonAndTeam[0];
    const team = buttonAndTeam[1];

    const buttonInformations = document.getElementById(`informations-${team}`);
    const buttonTitles = document.getElementById(`titles-${team}`);
    const buttonHistory = document.getElementById(`history-${team}`);

    buttonInformations.classList.remove("active");
    buttonTitles.classList.remove("active");
    buttonHistory.classList.remove("active");
    e.target.classList.add("active");

    const article = document.getElementById(`content-${team}`);

    if (article) {
      const contentInformations = document.getElementById(
        `content-informations-${team}`
      );
      const contentTitles = document.getElementById(`content-titles-${team}`);
      const contentHistory = document.getElementById(`content-history-${team}`);
      const clickedElement = document.getElementById(
        `content-${buttonName}-${team}`
      );

      contentInformations.classList.remove("active");
      contentTitles.classList.remove("active");
      contentHistory.classList.remove("active");

      clickedElement.classList.add("active");
    }
  }
});
