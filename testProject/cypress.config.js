const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: true,             // Active l’enregistrement vidéo
    videosFolder: 'cypress/videos', // Dossier où les vidéos seront stockées
  },
});
