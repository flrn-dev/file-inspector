<template>
  <v-card class="d-flex flex-column">
    <v-card-title class="d-flex align-end py-2">
      Ausgabe

      <v-spacer></v-spacer>

      <v-select
        label="Zahlensystem"
        v-model="displayMode"
        :items="displayModes"
        hide-details
        density="compact"
        style="max-width: 250px; min-width: 250px"
      ></v-select>
    </v-card-title>

    <v-card-text
      class="overflow-y-auto overflow-x-hidden"
      style="
        white-space: pre-wrap;
        word-break: break-word;
        overflow-wrap: anywhere;
        font-family: monospace;
        flex: 1 1 auto;
        min-height: 0;
      "
    >
      {{ formattedOutput }}
    </v-card-text>

    <v-divider class="my-2" />

    <v-card-actions>
      <slot></slot>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import { useAppFileStore } from "@/stores/useAppFileStore";

const appFileStore = useAppFileStore();

const displayModes = [
  "Binärsystem",
  "Oktalsystem",
  "Dezimalsystem",
  "Hexadezimalsystem",
];
const displayMode = ref(displayModes[0]);
const formattedOutput = computed(() => {
  const selectedAppFile = appFileStore.getSelectedAppFile();
  return !selectedAppFile
    ? "Bitte wähle eine Datei aus"
    : Array.from(
        new Uint8Array([...atob(selectedAppFile.data)].map((c) => c.charCodeAt(0)))
      )
        .map((b) => {
          switch (displayMode.value) {
            case "Binärsystem":
              return b.toString(2).padStart(8, "0");
            case "Oktalsystem":
              return b.toString(8).padStart(3, "0");
            case "Dezimalsystem":
              return b.toString(10).padStart(3, "0");
            case "Hexadezimalsystem":
              return b.toString(16).padStart(2, "0");
          }
        })
        .join(" ");
});
</script>
