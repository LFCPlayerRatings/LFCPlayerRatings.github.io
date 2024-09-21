<template>
  <div
    class="flex justify-content-center align-items-center flex-column w-full p-2"
  >
    <Card class="title" :class="'title-' + compColor + ' p-card' + compColor">
      <template #title>
        <div class="flex justify-content-between">
          <h3>{{ displayDate.toUpperCase() }}</h3>
          <h3>{{ result.responses }} RESPONSES</h3>
        </div>
      </template>
      <template #content>
        <div
          class="h-full flex justify-content-center align-items-center flex-column"
        >
          <h1>{{ result.title.toUpperCase() }}</h1>
          <div style="height: 1vw" class="bg-white w-8"></div>
          <h2>PLAYER RATINGS RESULTS</h2>
        </div>
      </template>
      <template #footer>
        <h3 class="text-center">Luke Connelly &amp; u/thyamklasic</h3>
      </template>
    </Card>
    <Card>
      <template #header
        ><div class="rounded-top" :class="'bg-' + compColor">
          <h2 class="text-center">STARTING XI RATINGS</h2>
        </div></template
      >
      <template #content>
        <Bar :options="XIChartOptions" :data="XIChartData"
      /></template>
    </Card>
    <Card>
      <template #header
        ><div class="rounded-top" :class="'bg-' + compColor">
          <h2 class="text-center">SUBSTITUTE RATINGS</h2>
        </div></template
      >
      <template #content>
        <div class="h-full grid">
          <div
            class="col-4 text-center flex flex-column justify-content-center p-0"
          >
            <div
              v-for="(s, i) in subs"
              :key="i"
              class="p-0"
              style="margin-bottom: 2vw"
              :class="
                s.excluded > s.included
                  ? result.competition === 'CL'
                    ? 'excluded-cl'
                    : 'excluded'
                  : result.competition === 'CL'
                  ? 'included-cl'
                  : 'included'
              "
            >
              {{
                s.included > s.excluded ? s.included * 100 : s.excluded * 100
              }}% {{ s.included > s.excluded ? "Included" : "Excluded" }}<br />
              <b>{{ displayName(s.name) }}</b> (for
              {{ displayName(s.replaced) }}) {{ s.min }}'
            </div>
            <div
              v-for="(s, i) in inclusions"
              :key="i"
              class="p-0"
              style="margin-bottom: 2vw"
              :class="s.excluded > s.included ? 'excluded' : ''"
            >
              {{
                s.included > s.excluded ? s.included * 100 : s.excluded * 100
              }}% {{ s.included > s.excluded ? "Included" : "Excluded" }}<br />
              <b>{{ displayName(s.name) }}</b> at {{ s.min }}'
            </div>
          </div>
          <div
            class="col-8 flex flex-column justify-content-center"
            style="max-height: 50vw"
          >
            <Bar :options="subChartOptions" :data="subChartData" />
          </div>
        </div>
      </template>
    </Card>
    <Card>
      <template #header
        ><div class="rounded-top" :class="'bg-' + compColor">
          <h2 class="text-center">PLAYER OF THE MATCH</h2>
        </div></template
      >
      <template #content>
        <div
          class="h-full flex justify-content-center align-items-center flex-column"
        >
          <img
            :src="`/players/${result.motm}.png`"
            :alt="result.motm"
            style="width: 30vw; object-fit: contain; max-width: 300px"
          />
          <div
            style="height: 1vw"
            :style="{
              background: result.competition === 'CL' ? '#0d0d9e' : '#9e0d0d',
            }"
            class="w-8"
          ></div>
          <h1>{{ result.motm.toUpperCase() }}</h1>
        </div>
      </template>
    </Card>
    <Card>
      <template #header
        ><div class="rounded-top" :class="'bg-' + compColor">
          <h2 class="text-center">WORD CLOUD</h2>
        </div></template
      >
      <template #content>
        <div
          class="h-full flex justify-content-center align-items-center flex-column"
        >
          <VueWordCloud
            :words="
              Object.entries(result.words).map(([text, weight]) => [
                text.toUpperCase(),
                weight,
              ])
            "
            style="width: 100%; height: 100%"
            :fontFamily="'Montserrat'"
            :color="
              () =>
                `rgb(${
                  result.competition === 'CL' ? 0 : Math.random() * 200 + 20
                },0,${
                  result.competition === 'CL' ? Math.random() * 200 + 20 : 0
                })`
            "
          />
        </div>
      </template>
    </Card>
    <Card>
      <template #header
        ><div class="rounded-top" :class="'bg-' + compColor">
          <h2 class="text-center">OTHER RATINGS</h2>
        </div></template
      >
      <template #content>
        <Bar :options="OtherChartOptions" :data="OtherChartData"
      /></template>
    </Card>
    <Card>
      <template #header
        ><div class="rounded-top" :class="'bg-' + compColor">
          <h2 class="text-center">HOT OR NOT</h2>
        </div></template
      >
      <template #content>
        <div
          class="h-full flex justify-content-center align-items-center flex-column"
        >
          <div class="w-full" style="max-height: 40vw; min-height: 20vw">
            <Bar :options="HRNChartOptions" :data="HRNChartData" />
          </div>
          <h1>AVERAGE: {{ hrnAverage > 0 ? "+" : "" }}{{ hrnAverage }}</h1>
        </div>
      </template>
    </Card>
    <Card v-if="prevResults.length > 1" class="title title-red p-card-red">
      <template #content>
        <div
          class="h-full flex justify-content-center align-items-center flex-column"
        >
          <h1>2024/25 SEASON SO FAR</h1>
          <div style="height: 1vw" class="bg-white w-8"></div>
          <h2>PLAYER RATINGS RESULTS</h2>
        </div>
      </template>
      <template #footer>
        <h3 class="text-center">TOTAL RESPONSES: {{ totalResponses }}</h3>
      </template>
    </Card>
    <Card v-if="prevResults.length > 1">
      <template #header
        ><div class="bg-red rounded-top">
          <h2 class="text-center">TEAM PERFORMANCES</h2>
        </div></template
      >
      <template #content>
        <Line
          :options="lineChartOptions"
          :data="lineChartData"
          style="max-height: 45vw"
        />
      </template>
    </Card>
    <Card v-if="prevResults.length > 1">
      <template #header
        ><div class="bg-red rounded-top">
          <h2 class="text-center">SEASON AVERAGES</h2>
        </div></template
      >
      <template #content>
        <div class="h-full grid">
          <div
            class="col-8 flex flex-column justify-content-center"
            style="max-height: 50vw"
          >
            <Bar
              :options="seasonChartOptions"
              :data="seasonChartData"
              style="height: 100%"
            />
          </div>
          <div
            class="col-4 text-center flex flex-column justify-content-center p-0"
            style="max-height: 50vw; overflow-y: auto"
          >
            <div class="p-1 bg-red rounded-top">
              BEST PERFORMANCES:<br />
              {{ bestPerformances[0] }}<br />
              {{ bestPerformances[1] }}<br />
              {{ bestPerformances[2] }}<br />
            </div>
            <div class="p-1 bg-dark">
              WORST PERFORMANCES:<br />
              {{ worstPerformances[0] }}<br />
              {{ worstPerformances[1] }}<br />
              {{ worstPerformances[2] }}<br />
            </div>
            <div class="p-1 bg-red">
              BEST TEAM PERFORMANCE:<br />
              {{ bestTeamPerformance.title }}<br />
              {{ bestTeamPerformance.score }}
            </div>
            <div class="p-1 bg-dark rounded-bottom">
              WORST TEAM PERFORMANCE:<br />
              {{ worstTeamPerformance.title }}<br />
              {{ worstTeamPerformance.score }}
            </div>
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>

<script>
import { mapState } from "vuex";
import VueWordCloud from "vuewordcloud";
import Card from "primevue/card";
import { Bar, Line } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  PointElement,
  LineElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  PointElement,
  LineElement,
  CategoryScale,
  LinearScale,
  ChartDataLabels
);

ChartJS.defaults.font.family = "Montserrat";
ChartJS.defaults.font.weight = "bold";

export default {
  name: "ViewResult",
  methods: {
    sizePx() {
      return Math.min((1.5 * window.innerWidth) / 100, 20);
    },
    sizeFont() {
      return {
        size: this.sizePx(),
        weight: "bold",
      };
    },
    sizeFontSmall() {
      return {
        size: this.sizePx() * 0.5,
        weight: "bold",
      };
    },
    parseDate(dateStr) {
      const [day, month, year] = dateStr.split("-").map(Number);
      return new Date(year, month - 1, day); // Months are 0-based in JavaScript
    },
    displayName(name) {
      let nameMap = {
        "Trent Alexander-Arnold": "Trent",
        "Virgil van Dijk": "Virgil",
        "Allison Becker": "Alisson",
        "Thiago Alcantara": "Thiago",
        "Alisson Becker": "Alisson",
        "Stefan Bajcetic Maquieira": "Bajčetić",
        "Stefan Bajčetić Maquieira": "Bajčetić",
      };
      return (
        nameMap[name] ||
        (name.includes(" ") ? name.split(" ").slice(1).join(" ") : name)
      );
    },
    displayNameLabel(name) {
      return "     " + this.displayName(name);
    },
    getResult(result) {
      if (!result.score) {
        return "#aaa";
      }
      if (result.score[0] == result.score[1]) {
        return "#F1C232";
      }
      if (result.score[0] > result.score[1]) {
        return result.home ? "#00B050" : "#C00000";
      }
      return result.home ? "#C00000" : "#00B050";
    },
    startingXIAverageFrom(result) {
      return (
        result.startingXI.reduce((acc, player) => acc + player.avg, 0) / 11
      );
    },
  },
  computed: {
    ...mapState({
      chronologicalResults: "chronologicalResults",
    }),
    result() {
      return this.chronologicalResults.find(
        (result) => result.id === this.$route.params.id
      );
    },
    compColor() {
      if (this.result.competition === "CL") return "blue";
      if (this.result.competition === "LC") return "blue";
      if (this.result.competition === "FA") return "blue";
      return "red";
    },
    prevResults() {
      const index = this.chronologicalResults.findIndex(
        (result) => result.id === this.$route.params.id
      );
      return this.chronologicalResults.slice(0, index + 1);
    },
    startingXI() {
      return [...this.result.startingXI].sort((a, b) => b.avg - a.avg);
    },
    subs() {
      return this.result.subs;
    },
    inclusions() {
      return this.result.inclusions;
    },
    startingXIAverage() {
      return this.startingXIAverageFrom(this.result);
    },
    hrnAverage() {
      const hrn = this.result.hotOrNot;
      const sum = hrn[0] * -2 + hrn[1] * -1 + hrn[2] + hrn[3] + hrn[4] * 2;
      const num = hrn.reduce((acc, val) => acc + val, 0);
      return (sum / num).toFixed(2);
    },
    includedPlayerPerformances() {
      const performances = [];
      for (let r of this.prevResults) {
        for (let player of r.startingXI) {
          let inclusion = r.inclusions.find((i) => i.name === player.name);
          if (inclusion && inclusion.included < inclusion.excluded) {
            continue;
          }
          performances.push({ ...player, acronym: r.acronym, home: r.home });
        }
        for (let player of r.subs) {
          if (player.included < player.excluded) {
            continue;
          }
          performances.push({ ...player, acronym: r.acronym, home: r.home });
        }
      }
      return performances;
    },
    seasonAverages() {
      const avgs = {};
      for (let p of this.includedPlayerPerformances) {
        if (!avgs[p.name]) {
          avgs[p.name] = { sum: 0, count: 0 };
        }
        avgs[p.name].sum += p.avg;
        avgs[p.name].count++;
      }
      return Object.entries(avgs)
        .map(([name, { sum, count }]) => {
          return { name, avg: sum / count, count };
        })
        .filter((player) => player.count >= this.prevResults.length * 0.2)
        .sort((a, b) => b.avg - a.avg);
    },
    bestTeamPerformance() {
      return this.prevResults
        .map((r) => {
          return { avg: this.startingXIAverageFrom(r), title: r.title };
        })
        .sort((a, b) => b.avg - a.avg)
        .map((r) => {
          return { score: r.avg.toFixed(2), title: r.title };
        })[0];
    },
    worstTeamPerformance() {
      return this.prevResults
        .map((r) => {
          return { avg: this.startingXIAverageFrom(r), title: r.title };
        })
        .sort((a, b) => a.avg - b.avg)
        .map((r) => {
          return { score: r.avg.toFixed(2), title: r.title };
        })[0];
    },
    bestPerformances() {
      return [...this.includedPlayerPerformances]
        .sort((a, b) => b.avg - a.avg)
        .slice(0, 3)
        .map(
          (player) =>
            this.displayName(player.name) +
            " " +
            player.avg.toFixed(2) +
            " v " +
            player.acronym +
            (player.home ? "(H)" : "(A)")
        );
    },
    worstPerformances() {
      return [...this.includedPlayerPerformances]
        .sort((a, b) => a.avg - b.avg)
        .slice(0, 3)
        .map(
          (player) =>
            this.displayName(player.name) +
            " " +
            player.avg.toFixed(2) +
            " v " +
            player.acronym +
            (player.home ? "(H)" : "(A)")
        );
    },
    lineChartData() {
      return {
        labels: this.prevResults.map(
          (x) => x.acronym + " " + (x.home ? "(H)" : "(A)")
        ),
        datasets: [
          {
            label: "Starting XI Avg",
            data: this.prevResults.map((r) => {
              return {
                y: this.startingXIAverageFrom(r).toFixed(2),
                x: 1,
                startingXI: r.startingXI,
                title: r.title,
              };
            }),
            pointRadius: 5,
            backgroundColor: this.prevResults.map(this.getResult),
            pointBorderColor: this.prevResults.map(this.getResult),
            borderColor: "#C00000",
            fill: false,
          },
        ],
      };
    },
    lineChartOptions() {
      return {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            beginAtZero: true,
            offset: true,
            ticks: {
              color: "black",
              font: this.sizeFont,
            },
          },
          y: {
            max: 10,
            beginAtZero: true,
            ticks: {
              color: "black",
              font: this.sizeFont,
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            displayColors: false,
            titleFont: { size: this.sizePx() },
            bodyFont: { size: this.sizePx() * 0.75 },
            footerFont: { size: this.sizePx() * 0.75 },
            callbacks: {
              title: (context) => {
                return context[0].raw.title;
              },
              footer: (context) => {
                return context[0].raw.startingXI
                  .sort((a, b) => b.avg - a.avg)
                  .map(
                    (player) =>
                      player.avg.toFixed(2) +
                      " " +
                      this.displayName(player.name)
                  )
                  .join("\n");
              },
            },
          },
          datalabels: {
            align: "end",
            anchor: "end",
            color: "black",
            font: this.sizeFont,
            formatter: (value) => {
              return value.y;
            },
          },
        },
      };
    },
    seasonChartData() {
      return {
        labels: [
          "Team Avg (" + this.prevResults.length + ")",
          ...this.seasonAverages.map(
            (player) =>
              this.displayNameLabel(player.name) + " (" + player.count + ")"
          ),
        ],
        datasets: [
          {
            data: [
              this.prevResults
                .map((r) => this.startingXIAverageFrom(r))
                .reduce((acc, val) => acc + val, 0) / this.prevResults.length,
              ...this.seasonAverages.map((player) => player.avg),
            ],
            backgroundColor: "#A00000",
            borderWidth: 1,
          },
        ],
      };
    },
    seasonChartOptions() {
      // TODO: nice to have a list of performances in tooltip?
      return {
        responsive: true,
        indexAxis: "y",
        scales: {
          x: {
            beginAtZero: true,
            max: 10,
            ticks: {
              color: "black",
              font: this.sizeFontSmall,
            },
          },
          y: {
            beginAtZero: true,
            ticks: {
              color: "black",
              font: this.sizeFontSmall,
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            displayColors: false,
            callbacks: {
              title: (context) => {
                const isOne = context[0].label.includes("(1)");
                if (context[0].label.includes("Team Avg")) {
                  return (
                    context[0].label.slice(0, -1) +
                    " Match" +
                    (isOne ? "" : "es") +
                    ")"
                  ).trim();
                }
                return (
                  context[0].label.slice(0, -1) +
                  " Appearance" +
                  (isOne ? "" : "s") +
                  ")"
                ).trim();
              },
              label: (context) => {
                return context.dataset.data[context.dataIndex].toFixed(2);
              },
            },
          },
          datalabels: {
            anchor: "end",
            align: 180,
            color: "white",
            font: this.sizeFontSmall,
            formatter: (value) => {
              return value.toFixed(2);
            },
          },
        },
      };
    },
    subChartData() {
      const data = [
        {
          y: "Team Avg",
          included: this.startingXIAverage,
          noOpinion: 0,
          excluded: 0,
          includedPercentage: 100,
          noOpinionPercentage: 0,
          excludedPercentage: 0,
          avg: this.startingXIAverage,
        },
        ...this.subs.map((player) => {
          return {
            y: this.displayNameLabel(player.name),
            included: player.avg * player.included,
            noOpinion: player.avg * player.noOpinion,
            excluded: player.avg * player.excluded,
            includedPercentage: player.included * 100,
            noOpinionPercentage: player.noOpinion * 100,
            excludedPercentage: player.excluded * 100,
            avg: player.avg,
          };
        }),
        ...this.inclusions.map((player) => {
          return {
            y: this.displayNameLabel(player.name),
            included: player.avg * player.included,
            noOpinion: player.avg * player.noOpinion,
            excluded: player.avg * player.excluded,
            includedPercentage: player.included * 100,
            noOpinionPercentage: player.noOpinion * 100,
            excludedPercentage: player.excluded * 100,
            avg: player.avg,
          };
        }),
      ];
      return {
        labels: data.map((player) => player.y),
        datasets: [
          {
            label: "Included",
            data: data,
            parsing: {
              xAxisKey: "included",
            },
            backgroundColor:
              this.result.competition === "CL" ? "#0000A0" : "#A00000",
          },
          {
            label: "No Opinion",
            data: data,
            parsing: {
              xAxisKey: "noOpinion",
            },
            backgroundColor:
              this.result.competition === "CL" ? "#000070" : "#700",
          },
          {
            label: "Excluded",
            data: data,
            parsing: {
              xAxisKey: "excluded",
            },
            backgroundColor:
              this.result.competition === "CL" ? "#000030" : "#300000",
          },
        ],
      };
    },
    subChartOptions() {
      return {
        indexAxis: "y",
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            stacked: true,
            beginAtZero: true,
            max: 10,
            ticks: {
              color: "black",
              font: this.sizeFont,
            },
          },
          y: {
            stacked: true,
            beginAtZero: true,
            ticks: {
              color: "black",
              font: this.sizeFont,
            },
          },
        },
        plugins: {
          legend: {
            onClick: null,
            labels: {
              color: "black",
              font: this.sizeFont,
              boxWidth: this.sizePx,
            },
          },
          tooltip: {
            callbacks: {
              label: (context) => {
                const value = context.raw;
                if (value.y === "Team Avg") {
                  return ` ${value.avg.toFixed(2)}`;
                }
                if (context.dataset.label === "Included") {
                  return ` ${value.includedPercentage.toFixed(1)}% Included`;
                }
                if (context.dataset.label === "No Opinion") {
                  return ` ${value.noOpinionPercentage.toFixed(1)}% No Opinion`;
                }
                return ` ${value.excludedPercentage.toFixed(1)}% Excluded`;
              },
            },
          },
          datalabels: {
            align: "end",
            anchor: "end",
            color: "black",
            font: this.sizeFont,
            formatter: (value, context) => {
              if (context.dataset.label !== "Excluded") {
                return "";
              }
              return value.avg.toFixed(2);
            },
          },
        },
      };
    },
    XIChartData() {
      return {
        labels: [
          "Team Avg",
          ...this.startingXI
            .map((player) => player.name)
            .map(this.displayNameLabel),
        ],
        datasets: [
          {
            data: [
              this.startingXIAverage,
              ...this.startingXI.map((player) => player.avg),
            ],
            backgroundColor:
              this.result.competition === "CL" ? "#0000A0" : "#A00000",
            borderWidth: 1,
          },
        ],
      };
    },
    XIChartOptions() {
      return {
        responsive: true,
        indexAxis: "y",
        scales: {
          x: {
            beginAtZero: true,
            max: 10,
            ticks: {
              color: "black",
              font: this.sizeFont,
            },
          },
          y: {
            beginAtZero: true,
            ticks: {
              color: "black",
              font: this.sizeFont,
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          datalabels: {
            anchor: "end",
            align: 180,
            color: "white",
            font: this.sizeFont,
            formatter: (value) => {
              return value.toFixed(2);
            },
          },
        },
      };
    },
    OtherChartData() {
      return {
        labels: [
          "1st Half",
          "2nd Half",
          "Crowd",
          "Tactics",
          "Defence",
          "Midfield",
          "Attack",
          "Referee",
          this.result.acronym,
        ],
        datasets: [
          {
            data: [
              this.result.firstHalf,
              this.result.secondHalf,
              this.result.crowd,
              this.result.tactics,
              this.result.def,
              this.result.mid,
              this.result.att,
              this.result.ref,
              this.result.opp,
            ],
            backgroundColor:
              this.result.competition === "CL" ? "#0000A0" : "#A00000",
          },
        ],
      };
    },
    OtherChartOptions() {
      return {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            max: 10,
            ticks: {
              color: "black",
              font: this.sizeFont,
            },
          },
          x: {
            beginAtZero: true,
            ticks: {
              color: "black",
              font: this.sizeFont,
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          datalabels: {
            anchor: "start",
            align: "end",
            color: "white",
            font: this.sizeFont,
            formatter: (value) => {
              return value.toFixed(2);
            },
          },
        },
      };
    },
    HRNChartData() {
      const total = this.result.hotOrNot.reduce((acc, val) => acc + val, 0);
      const data = [
        {
          dn: this.result.hotOrNot[0] / total,
          n: this.result.hotOrNot[1] / total,
          a: this.result.hotOrNot[2] / total,
          h: this.result.hotOrNot[3] / total,
          dh: this.result.hotOrNot[4] / total,
          dnNum: this.result.hotOrNot[0],
          nNum: this.result.hotOrNot[1],
          aNum: this.result.hotOrNot[2],
          hNum: this.result.hotOrNot[3],
          dhNum: this.result.hotOrNot[4],
        },
      ];
      return {
        datasets: [
          {
            label: "DEFINITELY NOT -2",
            data: data,
            parsing: {
              yAxisKey: "dn",
              xAxisKey: "dn",
            },
            backgroundColor: "#FFF2CC",
          },
          {
            label: "Not -1",
            data: data,
            parsing: {
              yAxisKey: "n",
              xAxisKey: "n",
            },
            backgroundColor: "#FFE599",
          },
          {
            label: "Average",
            data: data,
            parsing: {
              yAxisKey: "a",
              xAxisKey: "a",
            },
            backgroundColor: "#F1C232",
          },
          {
            label: "Hot +1",
            data: data,
            parsing: {
              yAxisKey: "h",
              xAxisKey: "h",
            },
            backgroundColor: "#B45F06",
          },
          {
            label: "DEFINITELY HOT +2",
            data: data,
            parsing: {
              yAxisKey: "dh",
              xAxisKey: "dh",
            },
            backgroundColor: "#990000",
          },
        ],
      };
    },
    HRNChartOptions() {
      return {
        indexAxis: "y",
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            stacked: true,
            beginAtZero: true,
            max: 1,
            ticks: {
              display: false,
            },
          },
          y: {
            stacked: true,
            ticks: {
              display: false,
            },
          },
        },
        plugins: {
          datalabels: {
            color: "white",
            textStrokeColor: "black",
            textStrokeWidth: 3,
            font: this.sizeFont,
            formatter: (value, context) => {
              if (context.dataset.label === "DEFINITELY NOT -2") {
                return value.dnNum || "";
              }
              if (context.dataset.label === "Not -1") {
                return value.nNum || "";
              }
              if (context.dataset.label === "Average") {
                return value.aNum || "";
              }
              if (context.dataset.label === "Hot +1") {
                return value.hNum || "";
              }
              return value.dhNum || "";
            },
          },
          legend: {
            onClick: null,
            labels: {
              color: "black",
              font: this.sizeFont,
              boxWidth: this.sizePx,
            },
          },
          tooltip: {
            callbacks: {
              title: () => null,
              label: (context) => {
                const value = context.raw;
                if (context.dataset.label === "DEFINITELY NOT -2") {
                  return ` ${(value.dn * 100).toFixed(1)}% Definitely Not`;
                }
                if (context.dataset.label === "Not -1") {
                  return ` ${(value.n * 100).toFixed(1)}% Not`;
                }
                if (context.dataset.label === "Average") {
                  return ` ${(value.a * 100).toFixed(1)}% Average`;
                }
                if (context.dataset.label === "Hot +1") {
                  return ` ${(value.h * 100).toFixed(1)}% Hot`;
                }
                return ` ${(value.dh * 100).toFixed(1)}% Definitely Hot`;
              },
            },
          },
        },
      };
    },
    displayDate() {
      function getOrdinalSuffix(day) {
        if (day > 3 && day < 21) return "th";
        switch (day % 10) {
          case 1:
            return "st";
          case 2:
            return "nd";
          case 3:
            return "rd";
          default:
            return "th";
        }
      }

      const date = this.parseDate(this.result.date);
      const day = date.getDate();
      const ordinalSuffix = getOrdinalSuffix(day);

      const formattedDate = date.toLocaleDateString("en-GB", {
        weekday: "long",
        month: "long",
        year: "numeric",
      });

      const weekday = formattedDate.split(" ").at(-1);
      const monthYear = formattedDate.split(" ").slice(0, -1).join(" ");
      const [month, year] = monthYear.split(" ");

      return `${weekday}, ${day}${ordinalSuffix} ${month} ${year}`;
    },
  },
  components: {
    Card,
    Bar,
    Line,
    VueWordCloud,
  },
};
</script>

<style>
.bg-red {
  background: #9e0d0d;
  color: white;
}

.bg-blue {
  background: #051249;
  color: white;
}

.bg-green {
  background: #005b3a;
  color: white;
}

.bg-silver {
  background: #71706e;
  color: white;
}

.bg-dark {
  background: #300;
  color: white;
}

.rounded-top {
  border-top-left-radius: var(--p-card-border-radius);
  border-top-right-radius: var(--p-card-border-radius);
}

.rounded-bottom {
  border-bottom-left-radius: var(--p-card-border-radius);
  border-bottom-right-radius: var(--p-card-border-radius);
}

.bg-red h2,
.bg-blue h2,
.bg-green h2,
.bg-silver h2 {
  margin: 0;
  padding: 1vw;
}

.p-card {
  --p-card-background: white;
  font-size: min(2vw, 18px);
}

.p-card-red {
  --p-card-color: #9e0d0d;
}

.p-card-blue {
  --p-card-color: #051249;
}

.p-card-green {
  --p-card-color: #005b3a;
}

.p-card-silver {
  --p-card-color: #71706e;
}

.included {
  color: #a00;
}

.included-cl {
  color: #00a;
}

.excluded {
  color: #300;
}

.excluded-cl {
  color: #003;
}

.title {
  --p-card-color: white;
  font-weight: bold;
  background-position: center;
}

.title-red {
  --p-card-background: linear-gradient(to bottom right, #9e0d0ddd, #340101dd),
    url("../assets/lfc.jpg");
}

.title-blue {
  --p-card-background: linear-gradient(to bottom right, #052d49dd, #420b62dd),
    url("../assets/lfc.jpg");
}

.title-green {
  --p-card-background: linear-gradient(to bottom right, #9e0d0ddd, #340101dd),
    url("../assets/lfc.jpg");
}

.title-silver {
  --p-card-background: linear-gradient(to bottom right, #9e0d0ddd, #340101dd),
    url("../assets/lfc.jpg");
}

.p-card-body {
  width: 100%;
  height: 60vw;
}

.p-card {
  width: 100%;
  max-width: 1000px;
  height: 60vw;
  max-height: 600px;
  margin-top: 0.5rem;
}

.p-card-content {
  height: 100% !important;
}

h1 {
  font-size: min(4vw, 30px);
}

h2 {
  font-size: min(3.5vw, 25px);
}

h3 {
  font-size: min(2.5vw, 20px);
}
</style>
