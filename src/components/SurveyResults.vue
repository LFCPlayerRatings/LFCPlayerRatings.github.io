<template>
  <div class="p-3" v-if="!latestSurveyEnded">
    <a :href="latestSurvey.link" class="link" target="_blank"
      >Take part in the latest survey here</a
    >
  </div>
  <div v-if="monthlyResults.length === 0" class="p-3" :class="classMod3(0)">
    <h2>New season coming soon!</h2>
  </div>
  <div
    v-for="(m, i) in monthlyResults"
    :key="i"
    :class="classMod3(i)"
    class="p-3"
  >
    <h2>{{ m.monthName }}</h2>
    <div>
      <ul>
        <li v-for="(r, j) in m.results" :key="j" class="p-1">
          <router-link :to="'/result/' + r.id" class="link">{{
            r.title
          }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "SurveyResults",
  methods: {
    classMod3(i) {
      if (i % 3 === 0) {
        return "home";
      }
      if (i % 3 === 1) {
        return "away";
      }
      return "third";
    },
  },
  computed: {
    ...mapState({
      latestSurvey: "latestSurvey",
      latestSurveyEnded: "latestSurveyEnded",
      monthlyResults: "monthlyResults",
    }),
  },
};
</script>

<style>
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
  background-color: #b01c27;
  color: white;
}

.home a:hover {
  color: #d1bf00;
}

.home h2 {
  color: #d1bf00;
}

.away {
  background-color: #0b011d;
  color: white;
}

.away a:hover {
  color: gray;
}

.away h2 {
  color: #51cadf;
}

.third {
  background-color: white;
  color: #b01c27;
}

.third a:hover {
  color: #5a0518;
}

.third h2 {
  color: black;
}
</style>
