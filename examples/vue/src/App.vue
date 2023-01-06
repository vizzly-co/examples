<script setup lang="ts">
</script>

<template>
  <DashboardBasic
    type="in-browser"
    :identityCallback="identityCallback"
    :loadDataSetsCallback="loadDataSetsCallback"
    :loadDataCallback="loadDataCallback"
  />
</template>

<script lang="ts">
import {applyReactInVue, applyPureReactInVue} from 'veaury'
// This is a React component
import Vizzly from '@vizzly/dashboard'
import {ref} from 'vue'

export default {
  components: {
    // Use HOC 'applyReactInVue' or 'applyPureReactInVue'
    DashboardBasic: applyReactInVue(Vizzly.Dashboard),
    DashboardBasicPure: applyPureReactInVue(Vizzly.Dashboard)
  },
  methods: {
    loadDataSetsCallback: async (identityConfig: any) => {
        const response = await fetch(`http://0.0.0.0:3005/api/resolve-data-sets`, {
          method: "post",
          body: JSON.stringify({ dataSets: identityConfig.dataSets }),
        });

        if (response.ok) {
          const dataSets = await response.json();
          return dataSets;
        }
      },
      loadDataCallback: async (dataSet: any) => {
          const response = await fetch(`http://0.0.0.0:3005/api/data/${dataSet.id}`);

          if (response.ok) {
            const result = await response.json();

            return result;
          } else {
            console.error(`Failed to load data for data set ${dataSet.id}.`);

            return null;
          }
        },
        identityCallback: async () => {
          const response = await fetch("http://0.0.0.0:3005/api/identity?type=custom");
          if (response.ok) {
            const tokens = await response.json();

            return tokens;
          }

          return null;
        }
  }
  // setup() {
  //   return {}
  // }
}
</script>

<!-- <style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style> -->
