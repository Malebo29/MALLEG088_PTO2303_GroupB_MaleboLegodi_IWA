const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

const data = {
  response: {
    requestType: "FETCH_ATHLETE_DATA",
    requestBy: "ALL_MATCHING_ATHLETES",
    forDisplay: "BEST_RACES",

    data: {
      NM372: {                                 // Key inside the data object
        firstName: "Nwabisa",
        surname: "Masiko",
        id: "NM372",
        races: [                               // Array inside the data object
          {
            date: '2022-11-18T20:00:00.000Z',
            time: [9, 7, 8, 6],
          },
          {
            date: '2022-12-02T20:00:00.000Z',
            time: [6, 7, 8, 7],
          },
        ],
      },

      SV782: {
        firstName: "Schalk",
        surname: "Venter",
        id: "SV782",
        races: [
          {
            date: '2022-11-18T20:00:00.000Z',
            time: [10, 8, 3, 12],
          },
          {
            date: '2022-11-25T20:00:00.000Z',
            time: [6, 8, 9, 11],
          },
          {
            date: '2022-12-02T20:00:00.000Z',
            time: [10, 11, 4, 8],
          },
          {
            date: '2022-12-09T20:00:00.000Z',
            time: [9, 8, 9, 11],
          },
        ],
      },
    },
  },
};

// Only edit below this comment

const createHtml = (athlete) => {
  const [firstName, surname, id, races] = [athlete.firstName, athlete.surname, athlete.id, athlete.races]
  // const [date, time] = [races.reverse()];

  const fragment = document.createDocumentFragment();
  const list = document.createElement("dl");

  races.forEach((element)=> {
  const [date, time ] = [element.date, element.time.reverse()]

  const title = document.createElement("h2");
  title.innerHTML = id;
  fragment.appendChild(title);

  const day = new Date(date).getDate();
  const month = MONTHS[new Date(date).getMonth()];
  const year = new Date(date).getFullYear();

  const [first, second, third, fourth] = time;
  const total = first + second + third + fourth;

  const hours = (total / 60);
  const rhours = Math.floor(hours);
  const minutes = (hours - rhours) * 60;
  const rminutes = Math.floor(minutes);

  list.innerHTML = /* html */ `
    <dt>Athlete</dt>
    <dd>${firstName} ${surname}</dd>

    <dt>Total Races</dt>
    <dd>${races.length}</dd>

    <dt>Event Date (Latest)</dt>
    <dd>${day} ${month} ${year}</dd>

    <dt>Total Time (Latest)</dt>
    <dd>${rhours}:${rminutes}</dd>`;

  })
  return fragment.appendChild(list);
}

const [NM372, SV782] = [data.response.data.NM372, data.response.data.SV782]

document.querySelector('[data-athlete="NM372"]').appendChild(createHtml(NM372));
document.querySelector('[data-athlete="SV782"]').appendChild(createHtml(SV782));
