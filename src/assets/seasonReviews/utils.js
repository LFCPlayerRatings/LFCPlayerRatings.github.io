export const seasonAveragesLineChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  padding: 10,
  plugins: {
    tooltip: {
      mode: "index",
      intersect: false,
    },
    hover: {
      mode: "nearest",
      intersect: true,
    },
    datalabels: {
      display: false,
    },
  },
  layout: {
    backgroundColor: "white",
  },
  scales: {
    x: {
      ticks: {
        autoSkip: false,
        maxRotation: 90,
        minRotation: 90,
      },
    },
  },
};

function getPlayerResultList(player, colour, list, show = false) {
  return {
    label: player,
    backgroundColor: colour,
    borderColor: colour,
    data: list,
    fill: false,
    spanGaps: false,
    lineTension: 0,
    hidden: !show,
  };
}

const categoricalColours = [
  "#000000",
  "#8b0707",
  "#3366cc",
  "#ff9900",
  "#109618",
  "#990099",
  "#0099c6",
  "#dd4477",
  "#66aa00",
  "#dc3912",
  "#316395",
  "#994499",
  "#22aa99",
  "#aaaa11",
  "#6633cc",
  "#e67300",
  "#651067",
  "#329262",
  "#5574a6",
  "#3b3eac",
];

const MIN_PERFORMANCES = 30;

export function getSeasonReviewLineChartData(opponents, players) {
  const sortedPlayers = Object.entries(players).sort(
    (a, b) => b[1].filter((r) => r).length - a[1].filter((r) => r).length
  );
  const playerResults = sortedPlayers.map(([player, data], index) => {
    return getPlayerResultList(
      player,
      categoricalColours[index],
      data,
      data.filter((r) => r).length > MIN_PERFORMANCES
    );
  });
  return {
    labels: opponents,
    datasets: playerResults,
  };
}
