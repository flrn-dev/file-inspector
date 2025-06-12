import { defineStore } from "pinia";
import type { AppTheme, AppBarBackgroundImage } from "@/types/app";

export const useUiStore = defineStore("ui", {
  state: () => ({
    appTheme: (window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light") as AppTheme,
    appBarBackgroundImage: null as AppBarBackgroundImage,
  }),
  actions: {
    getAppTheme(): AppTheme {
      return this.appTheme;
    },
    toggleAppTheme(): AppTheme {
      return (this.appTheme = this.appTheme === "dark" ? "light" : "dark");
    },
    async getAppBarBackgroundImage(): Promise<AppBarBackgroundImage> {
      if (
        !this.appBarBackgroundImage ||
        Date.now() - this.appBarBackgroundImage?.timestamp < 86_400_000
      )
        this.appBarBackgroundImage = await this.fetchNasaApod();
      return this.appBarBackgroundImage;
    },
    async fetchNasaApod(): Promise<AppBarBackgroundImage> {
      try {
        const response = await fetch(
          "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"
        );
        return {
          timestamp: Date.now(),
          data: await response.json(),
        } as AppBarBackgroundImage;
      } catch (err) {
        console.error(err);
      }
      return null;
    },
  },
  persist: {
    storage: localStorage,
    pick: ["appTheme", "appBarBackgroundImage"],
  },
});
