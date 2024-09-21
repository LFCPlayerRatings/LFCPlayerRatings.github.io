<template>
  <div v-if="chronologicalResults.length <= 5" class="p-3 home">
    <h2>Season so far coming soon!</h2>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "SeasonSoFar",
  computed: {
    ...mapState({
      chronologicalResults: "chronologicalResults",
    }),
  },
};
</script>
