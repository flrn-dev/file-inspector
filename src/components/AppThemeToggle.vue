<template>
  <v-btn icon @click="applyTheme(uiStore.toggleAppTheme())">
    <v-icon
      :class="uiStore.getAppTheme() === 'dark' ? 'icon-dark' : 'icon-light'"
      >mdi-weather-night</v-icon
    >
  </v-btn>
</template>

<script lang="ts" setup>
import { useUiStore } from "@/stores/useUiStore";
import type { AppTheme } from "@/types/app";
import { useTheme } from "vuetify";

const uiStore = useUiStore();
const theme = useTheme();

const applyTheme = (appTheme: AppTheme) => {
  theme.global.name.value = appTheme;
};

onMounted(() => applyTheme(uiStore.getAppTheme()));
</script>

<style lang="scss" scoped>
.icon-light {
  transition: color 0.3s ease;
}

.icon-dark {
  color: #ffeb3b;
  filter: drop-shadow(0 0 4px #ffeb3b88);
  transition: all 0.3s ease;
}
</style>
