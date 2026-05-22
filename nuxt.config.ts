// https://nuxt.com/docs/api/configuration/nuxt-config

import "./lib/env";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxt/ui"],
  eslint: {
    config: {
      standalone: false,
    },
  },
  css: ["./app/assets/css/main.css"],
});
