const about = document.querySelector(".about-center");

const teams = [
  {
    name: "palmeiras",
    history: "Muito bom",
    vision: "Bacana",
    goals: "Ser bom",
    img: "./assets/palmeiras.jpg",
    label: "Palmeiras",
  },
  {
    name: "corinthians",
    history: "Muito ruim",
    vision: "lixo",
    goals: "Ser ruim",
    img: "./assets/corinthians.jpg",
    label: "Corinthians",
  },
];

const sectionCenter = document.querySelector(".about-center");

window.addEventListener("DOMContentLoaded", function () {
  let displayTeams = teams.map((team) => {
    return `<div id=${team.name} class="team-content">
              <article class="about-img">
                <img src=${team.img} alt="about picture" />
                <h2>${team.label}</h>
              </article>
              <article class="about">
                  <div class="btn-container">
                      <button class="tab-btn active" data-id="history-${team.name}" id="history-${team.name}">History</button>
                      <button class="tab-btn" data-id="vision-${team.name}" id="vision-${team.name}">Vision</button>
                      <button class="tab-btn" data-id="goals-${team.name}" id="goals-${team.name}">Goals</button>
                  </div>
                  <article class="about-content" id="content-${team.name}">
                      <div class="content active" id="content-history-${team.name}">
                          <h4>History</h4>
                          <p>${team.history}</p>
                      </div>
                      <div class="content" id="content-vision-${team.name}">
                          <h4>Vision</h4>
                          <p>${team.vision}</p>
                      </div>
                      <div class="content" id="content-goals-${team.name}">
                          <h4>Goals</h4>
                          <p>${team.goals}</p>
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

    const buttonHistory = document.getElementById(`history-${team}`);
    const buttonVision = document.getElementById(`vision-${team}`);
    const buttonGoals = document.getElementById(`goals-${team}`);

    buttonHistory.classList.remove("active");
    buttonVision.classList.remove("active");
    buttonGoals.classList.remove("active");
    e.target.classList.add("active");

    const article = document.getElementById(`content-${team}`);

    if (article) {
      const contentHistory = document.getElementById(`content-history-${team}`);
      const contentVision = document.getElementById(`content-vision-${team}`);
      const contentGoals = document.getElementById(`content-goals-${team}`);
      const clickedElement = document.getElementById(
        `content-${buttonName}-${team}`
      );

      contentHistory.classList.remove("active");
      contentVision.classList.remove("active");
      contentGoals.classList.remove("active");

      clickedElement.classList.add("active");
    }
  }
});
