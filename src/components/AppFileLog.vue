<template>
  <v-list class="overflow-y-auto">
    <v-list-subheader class="font-weight-black">Log</v-list-subheader>

    <v-divider class="my-2 pb-2"/>

    <v-list-item
      v-for="(file, index) in appFileStore.getAppFiles()"
      :key="index"
      style="height: 40px;"
      :active="isActive(file)"
      @click="appFileStore.loadAppFile(index)"
    >
      <v-card variant="plain"
        class="w-100 d-flex align-center justify-space-between"
        style="background-color: transparent"
      >
        <v-card-subtitle class="pa-0">
          {{ file.name }}
        </v-card-subtitle>

        <v-card-actions class="pa-0 ml-auto d-flex">
          <v-btn
            icon
            density="comfortable"
            @click.stop="appFileStore.unlogAppFile(index)"
          >
            <v-icon size="small" color="error">mdi-delete</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-list-item>
  </v-list>
</template>

<script setup lang="ts">
import { useAppFileStore } from "@/stores/useAppFileStore";
import type { AppFile } from '@/types/app';

const appFileStore = useAppFileStore();

const isActive = (file: AppFile): boolean => {
  return appFileStore.getSelectedAppFile()?.data === file.data;
};
</script>
