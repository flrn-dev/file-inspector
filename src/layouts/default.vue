<template>
  <v-app-bar>
    <AppBarBackgroundImage>
      <v-app-bar-title>File-Inspector</v-app-bar-title>
      <v-spacer />
      <AppThemeToggle />
      <v-btn icon href="https://apod.nasa.gov/apod/astropix.html" target="_blank" rel="noopener noreferrer">
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </AppBarBackgroundImage>
  </v-app-bar>

  <v-main class="d-flex justify-center bg-surface mb-16">
    <router-view />
  </v-main>

  <v-footer
    class="d-flex flex-column align-center justify-center text-center text-medium-emphasis border-t"
    style="height: 100px"
    app
    absolute
  >
    <div>
      © {{ new Date().getFullYear() }} File-Inspector – all rights reserved.
    </div>
  </v-footer>
</template>
