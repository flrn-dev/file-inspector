<template>
  <div :style="backgroundStyle" class="text-white px-4">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { useUiStore } from "@/stores/useUiStore";
import type { CSSProperties } from "vue";

const uiStore = useUiStore();
const backgroundImageUrl = ref();
const backgroundStyle = computed<CSSProperties>(() => {
  const gradient = "linear-gradient(to top right, rgba(0,0,0,0.5), rgba(10,20,40,0.75))";
  return {
    backgroundImage: backgroundImageUrl.value
      ? `${gradient}, url(${backgroundImageUrl.value})`
      : gradient,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  };
});

onMounted(async () => {
  backgroundImageUrl.value = (await uiStore.getAppBarBackgroundImage())?.data.url;
});
</script>
