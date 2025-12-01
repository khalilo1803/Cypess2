const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "48de2dd9-33e4-4c0b-9f75-cdd45c86969a",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: true,             // Active l’enregistrement vidéo
    videosFolder: 'cypress/videos', // Dossier où les vidéos seront stockées
  },
});
