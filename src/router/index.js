import { createRouter, createWebHashHistory } from "vue-router";
import SurveyResults from "../components/SurveyResults.vue";
import ViewResult from "../components/ViewResult.vue";
import SeasonReview from "../components/SeasonReview.vue";
import SeasonSoFar from "../components/SeasonSoFar.vue";

const routes = [
  {
    path: "/",
    component: SurveyResults,
  },
  { path: "/result/:id", component: ViewResult },
  { path: "/season", component: SeasonSoFar },
  { path: "/season/:season", component: SeasonReview },
  { path: "/:pathMatch(.*)*", redirect: "/" },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
