<template>
  <v-file-input
    v-model="inputFile"
    label="Datei auswählen"
    show-size
    :persistent-clear="true"
    hide-details
    density="compact"
    style="max-width: 400px; min-width: 400px"
  />

  <v-spacer />

  <v-btn color="primary" :disabled="!inputFile" @click="selectNewAppFile()">
    Anzeigen
  </v-btn>

  <v-btn
    color="error"
    :disabled="!appFileStore.getSelectedAppFile()"
    @click="appFileStore.setSelectedAppFile(null)"
  >
    Löschen
  </v-btn>
</template>

<script setup lang="ts">
import { useAppFileStore } from "@/stores/useAppFileStore";
import type { AppFile } from "@/types/app";

const appFileStore = useAppFileStore();
const inputFile = ref();

const selectNewAppFile = async () => {
  const newFile = {
    name: inputFile.value.name,
    data: await inputFile.value
      .arrayBuffer()
      .then((buf: any) => btoa(String.fromCharCode(...new Uint8Array(buf)))),
  } as AppFile;

  appFileStore.setSelectedAppFile(newFile);
  appFileStore.logAppFile(newFile);
};
</script>
