import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

export default {
  site: "https://efa-esteffor.edu.gt",
  integrations: [tailwind(), sitemap()],
};
