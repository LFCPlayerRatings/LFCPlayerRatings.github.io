import { createStore } from "vuex";

async function readJson(filePath) {
  const resp = await fetch(filePath);
  return await resp.json();
}

const latestSurvey = await readJson("/latestSurvey.json");

const resultsList = await readJson("/resultsList.json");

function reformatDate(s) {
  let [d, m, y] = s.split("-");
  return `${y}-${m}-${d}`;
}

const results = {};
for (let r of resultsList) {
  const result = await readJson(`/results/${r}.json`);
  results[r] = {
    id: r,
    ...result,
    date: reformatDate(result.date),
  };
}

const chronologicalResults = Object.values(results).sort(
  (a, b) => new Date(a.date) - new Date(b.date)
);

const monthMap = {};

Object.values(chronologicalResults).forEach((result) => {
  const date = new Date(result.date);
  const monthKey = `${date.getFullYear()}-${String(
    date.getMonth() + 1
  ).padStart(2, "0")}`;

  if (!monthMap[monthKey]) {
    monthMap[monthKey] = [];
  }

  monthMap[monthKey].push(result);
});

// Convert the map to an array of { month: string, results: array } objects
const monthlyResults = Object.keys(monthMap)
  .sort((a, b) => new Date(a) - new Date(b))
  .map((monthKey) => ({
    month: monthKey,
    monthName: new Date(monthKey).toLocaleString("default", {
      month: "long",
    }),
    results: monthMap[monthKey],
  }));

const latestResultId = monthlyResults.length
  ? monthlyResults.at(-1).results.at(-1).id
  : latestSurvey.id;

const latestSurveyEnded = latestSurvey.id === latestResultId;

export default createStore({
  state() {
    return {
      chronologicalResults,
      monthlyResults,
      latestSurvey,
      latestResultId,
      latestSurveyEnded,
    };
  },
});
