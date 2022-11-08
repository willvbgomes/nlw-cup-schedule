import { schedule } from './schedule.js'

function createMatch({ team1, team2, time }) {
  return `
  <li>
    <img src="./assets/icon-${team1}.svg" alt="${team1.replace('-', ' ')}" />
    <strong>${time}</strong>
    <img src="./assets/icon-${team2}.svg" alt="${team2.replace('-', ' ')}" />
  </li>`
}

let delay = -0.3
function createCard({ date, day, matches }) {
  delay += 0.3

  const matchesList = matches.reduce(
    (acc, match) => (acc += createMatch(match)),
    ''
  )

  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>

      <ul>
        ${matchesList}
      </ul>
    </div>`
}

document.querySelector('#cards').innerHTML = schedule.reduce(
  (acc, matchDay) => (acc += createCard(matchDay)),
  ''
)
