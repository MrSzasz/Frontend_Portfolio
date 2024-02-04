import { defineConfig } from "cypress";
import { readPdf } from "cypress/scripts/readPdf";

export default defineConfig({
  e2e: {
    supportFile: false,
    baseUrl: "http://localhost:4321",
    setupNodeEvents(
      on: Cypress.PluginEvents,
      config: Cypress.PluginConfigOptions
    ) {
      on("task", {
        readPdf,
      });
    },
  },
});
