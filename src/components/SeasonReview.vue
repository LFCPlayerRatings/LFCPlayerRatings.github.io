<template>
  <div v-if="!exists" class="p-2"><h2>404: Season review not found</h2></div>
  <div v-else>
    <h2 class="p-2">Season Review {{ season }}</h2>
    <div id="slides" class="home p-2">
      <a @click="(e) => scrollTo(e, 'comparison')" class="link"
        >Jump to Player Comparison</a
      ><br />
      <a @click="(e) => scrollTo(e, 'results')" class="link"
        >Jump to Results Archive</a
      >
    </div>
    <div
      v-if="images"
      id="review"
      class="flex justify-content-center align-items-center flex-column w-full"
    >
      <img v-for="(img, i) in images" :key="i" :src="img" alt="season review" />
    </div>
    <div id="comparison" class="home p-2">
      <a @click="(e) => scrollTo(e, 'slides')" class="link"
        >Jump to Season Review</a
      ><br />
      <a @click="(e) => scrollTo(e, 'results')" class="link"
        >Jump to Results Archive</a
      >
    </div>
    <div
      class="flex justify-content-center align-items-center flex-column w-full"
      id="linechart"
    >
      <h2>Defence</h2>
      <div class="bg-white">
        <Line
          :data="defenceLineChartData"
          :options="seasonAveragesLineChartOptions"
        />
      </div>
      <h2>Midfield</h2>
      <div class="bg-white">
        <Line
          :data="midfieldLineChartData"
          :options="seasonAveragesLineChartOptions"
        />
      </div>
      <h2>Attack</h2>
      <div class="bg-white">
        <Line
          :data="attackLineChartData"
          :options="seasonAveragesLineChartOptions"
        />
      </div>
    </div>
    <div id="results" class="home p-2 mb-2">
      <a @click="(e) => scrollTo(e, 'slides')" class="link"
        >Jump to Season Review</a
      ><br />
      <a @click="(e) => scrollTo(e, 'comparison')" class="link"
        >Jump to Player Comparison</a
      ><br />
    </div>
    <div
      v-for="(m, i) in Object.keys(monthlyResults)"
      :key="i"
      :class="classMod3(i)"
      class="p-3"
    >
      <h2>{{ m }}</h2>
      <div>
        <ul>
          <li v-for="(r, j) in monthlyResults[m]" :key="j" class="p-1">
            <i v-if="r.link == '#'" class="link">{{ r.title }}</i>
            <a :href="r.link" target="_blank" class="link" v-else>{{
              r.title
            }}</a>
          </li>
        </ul>
      </div>
    </div>
    <div id="bottom" class="home p-2 mt-2">
      <a @="(e) => scrollTo(e, 'slides')" class="link">Jump to Season Review</a
      ><br />
      <a @click="(e) => scrollTo(e, 'comparison')" class="link"
        >Jump to Player Comparison</a
      ><br />
      <a @click="(e) => scrollTo(e, 'results')" class="link"
        >Jump to Results Archive</a
      >
    </div>
  </div>
</template>

<script>
import { Line } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  LinearScale
);

ChartJS.defaults.font.family = "Montserrat";
ChartJS.defaults.font.weight = "bold";
ChartJS.defaults.color = "black";

import { seasonAveragesLineChartOptions } from "../assets/seasonReviews/utils.js";

export default {
  name: "SeasonReview",
  data() {
    return {
      images: [],
      seasonAveragesLineChartOptions,
      seasons: {
        "2023-24": {
          home: {
            bg: "#C50020",
            link: "white",
            hover: "gray",
            header: "white",
          },
          away: {
            bg: "white",
            link: "#197829",
            hover: "#22a337",
            header: "black",
          },
          third: {
            bg: "#24222F",
            link: "#9B90CB",
            hover: "#7E5E9A",
            header: "white",
          },
        },
        "2022-23": {
          home: {
            bg: "#A5181A",
            link: "white",
            hover: "gray",
            header: "white",
          },
          away: {
            bg: "white",
            link: "#3C809B",
            hover: "#D47FA5",
            header: "black",
          },
          third: {
            bg: "#103F42",
            link: "#347c67",
            hover: "#F84843",
            header: "#F84843",
          },
        },
        "2021-22": {
          home: {
            bg: "#AE051E",
            link: "white",
            hover: "#F84843",
            header: "white",
          },
          away: {
            bg: "#C3BDB3",
            link: "#185C34",
            hover: "#F84843",
            header: "black",
          },
          third: {
            bg: "#CAB117",
            link: "#AE051E",
            hover: "#6C0000",
            header: "#AE051E",
          },
        },
        "2020-21": {
          home: {
            bg: "#BD1421",
            link: "white",
            hover: "#39f792",
            header: "white",
          },
          away: {
            bg: "#49B8B1",
            link: "black",
            hover: "white",
            header: "black",
          },
          third: {
            bg: "black",
            link: "white",
            hover: "#F52E13",
            header: "white",
          },
        },
        "2019-20": {
          home: {
            bg: "#7A1415",
            link: "#FBBF05",
            hover: "white",
            header: "white",
          },
          away: {
            bg: "#CDCDCD",
            link: "#2C3869",
            hover: "#C42735",
            header: "#2C3869",
          },
          third: {
            bg: "black",
            link: "white",
            hover: "#6FDDE5",
            header: "white",
          },
        },
        "2018-19": {
          home: {
            bg: "#931016",
            link: "white",
            hover: "gray",
            header: "white",
          },
          away: {
            bg: "#362D80",
            link: "#FF7802",
            hover: "#FA5934",
            header: "#FF7802",
          },
          third: {
            bg: "#CBCAC8",
            link: "#CF0C1C",
            hover: "#A80D0E",
            header: "#717583",
          },
        },
      },
      seasonData: {},
      exists: false,
    };
  },
  components: {
    Line,
  },
  methods: {
    scrollTo(e, id) {
      if (e.target) {
        document.getElementById(id).scrollIntoView({ behavior: "smooth" });
      }
    },
    classMod3(i) {
      if (i % 3 === 0) {
        return "home";
      }
      if (i % 3 === 1) {
        return "away";
      }
      return "third";
    },
    async getImages() {
      for (let i = 0; i <= 30; i++) {
        let png = await fetch(`/${this.season}/season-review${i}.png`);
        let svg = await fetch(`/${this.season}/season-review${i}.svg`);
        if (!png.ok && !svg.ok) {
          break;
        }
        let img = png.ok ? png : svg;
        // add URL to images
        this.images.push(img.url);
      }
    },
    async getSeasonData() {
      const context = require.context(
        "../assets/seasonReviews",
        false,
        /\.js$/
      );
      const seasonData = {};

      context.keys().forEach((key) => {
        const seasonName = key.match(/\.\/(.*)\.js$/)[1];
        seasonData[seasonName] = context(key);
      });

      this.seasonData = seasonData;
    },
  },
  computed: {
    season() {
      return this.$route.params.season;
    },
    monthlyResults() {
      return this.seasonData[this.season].monthlyResults;
    },
    defenceLineChartData() {
      return this.seasonData[this.season].defenceLineChartData;
    },
    midfieldLineChartData() {
      return this.seasonData[this.season].midfieldLineChartData;
    },
    attackLineChartData() {
      return this.seasonData[this.season].attackLineChartData;
    },
    homeBg() {
      return this.seasons[this.season].home.bg;
    },
    homeLink() {
      return this.seasons[this.season].home.link;
    },
    homeHover() {
      return this.seasons[this.season].home.hover;
    },
    homeHeader() {
      return this.seasons[this.season].home.header;
    },
    awayBg() {
      return this.seasons[this.season].away.bg;
    },
    awayLink() {
      return this.seasons[this.season].away.link;
    },
    awayHover() {
      return this.seasons[this.season].away.hover;
    },
    awayHeader() {
      return this.seasons[this.season].away.header;
    },
    thirdBg() {
      return this.seasons[this.season].third.bg;
    },
    thirdLink() {
      return this.seasons[this.season].third.link;
    },
    thirdHover() {
      return this.seasons[this.season].third.hover;
    },
    thirdHeader() {
      return this.seasons[this.season].third.header;
    },
  },
  watch: {
    season() {
      this.exists = Object.keys(this.seasons).includes(this.season);
      this.images = [];
      this.getImages();
    },
  },
  created() {
    this.exists = Object.keys(this.seasons).includes(this.season);
    this.getImages();
    this.getSeasonData();
  },
};
</script>

<style scoped>
#review img,
#linechart div {
  width: 100%;
  max-width: 1000px;
  height: 60vw;
  max-height: 600px;
  margin: 0.5rem;
}

.bg-white {
  background-color: white;
  min-height: 400px;
}

.link {
  color: inherit;
  text-decoration: none;
}

.link:hover {
  color: gray;
}

.home,
.away,
.third {
  background-image: linear-gradient(to bottom right, #00000000, #00000060);
}

.home {
  background-color: v-bind("homeBg");
  color: v-bind("homeLink");
}

.home a:hover {
  color: v-bind("homeHover");
}

.home h2 {
  color: v-bind("homeHeader");
}

.away {
  background-color: v-bind("awayBg");
  color: v-bind("awayLink");
}

.away a:hover {
  color: v-bind("awayHover");
}

.away h2 {
  color: v-bind("awayHeader");
}

.third {
  background-color: v-bind("thirdBg");
  color: v-bind("thirdLink");
}

.third a:hover {
  color: v-bind("thirdHover");
}

.third h2 {
  color: v-bind("thirdHeader");
}
</style>
