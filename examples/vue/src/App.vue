<script setup lang="ts"></script>

<template>
  <VizzlyDashboard
    :identity="identity"
    queryEngineEndpoint="https://example.vizzly.co/query-engine"
  />
</template>

<script lang="ts">
import { applyReactInVue, applyPureReactInVue } from "veaury";
import Vizzly from "@vizzly/dashboard";

export default {
  components: {
    VizzlyDashboard: applyPureReactInVue(Vizzly.Dashboard),
  },
  methods: {
    identity: async () => {
      const response = await fetch("https://example.vizzly.co/api/identity?userId=generate-random");
      if(response.ok) {
        const tokens = await response.json();

        return tokens;
      };

      return null;
    }
  },
};
</script>
