import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "pt-BR",
  title: "Super App",
  description: "Informações sobre o ensino superior na Bahia",

  theme,

  // Enable it with pwa
  shouldPrefetch: false,
});
