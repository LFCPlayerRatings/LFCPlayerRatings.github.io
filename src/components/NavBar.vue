<template>
  <Menubar :model="items">
    <template #start>
      <img
        src="@/assets/liverbird.png"
        alt="Liverbird"
        height="75"
        class="liverbird"
        @click="$router.push('/')"
      />
    </template>
    <template #item="{ item, props, hasSubmenu }">
      <router-link
        v-if="item.route"
        v-slot="{ href, navigate }"
        :to="item.route"
        custom
      >
        <a :href="href" v-bind="props.action" @click="navigate">
          <span>{{ item.label }}</span>
        </a>
      </router-link>
      <a v-else :href="item.url" :target="item.target" v-bind="props.action">
        <span :class="item.icon" />
        <span :class="hasSubmenu ? '' : 'ml-2'">{{ item.label }}</span>
        <span v-if="hasSubmenu" class="pi pi-fw pi-angle-down ml-2" />
      </a>
    </template>
  </Menubar>
</template>

<script>
import Menubar from "primevue/menubar";
export default {
  name: "NavBar",
  components: {
    Menubar,
  },
  data() {
    return {
      items: [
        {
          label: "Results",
          route: "/",
        },
        {
          label: "Season so far",
          route: "/season",
        },
        {
          label: "Past Seasons",
          items: [
            {
              label: "2023-24",
              route: "/season/2023-24",
            },
            {
              label: "2022-23",
              route: "/season/2022-23",
            },
            {
              label: "2021-22",
              route: "/season/2021-22",
            },
            {
              label: "2020-21",
              route: "/season/2020-21",
            },
            {
              label: "2019-20",
              route: "/season/2019-20",
            },
            {
              label: "2018-19",
              route: "/season/2018-19",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style>
.p-menubar {
  font-weight: bold;
  font-size: x-large;
  --p-menubar-item-gap: 0px;
}

.liverbird {
  padding: 0.5rem;
}
</style>
