import { defineStore } from "pinia";
import type { AppFile } from '@/types/app';

export const useAppFileStore = defineStore("appFile", {
  state: () => ({
    selectedAppFile: null as AppFile | null,
    appFiles: [] as AppFile[],
  }),
  actions: {
    getSelectedAppFile(): AppFile | null {
      return this.selectedAppFile;
    },
    setSelectedAppFile(file: AppFile | null) {
      this.selectedAppFile = file;
    },
    getAppFiles(): AppFile[] {
      return this.appFiles;
    },
    loadAppFile(index: number) {
      this.selectedAppFile = this.appFiles[index];
    },
    logAppFile(file: AppFile) {
      if(!this.appFiles.some((f: AppFile) => f.data === file.data ))
        this.appFiles.push(file);
    },
    unlogAppFile(index: number) {
      this.appFiles.splice(index, 1);
    },
  },
  persist: {
    storage: localStorage,
    pick: ["fileHistory"],
  },
});
