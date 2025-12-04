const { defineConfig } = require("cypress");
const mysql = require("mysql2/promise");

module.exports = defineConfig({
  projectId: 'a68otc',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("task", {
        async queryDb(query) {
          const connection = await mysql.createConnection({
            host: "localhost",
            user: "root",
            database: "spring_produits_db"
          });

          const [rows] = await connection.execute(query);
          connection.end();
          return rows;
        }
      });

    },
    video: true,     // Active l’enregistrement vidéo
    videosFolder: 'cypress/videos', // Dossier où les vidéos seront stockées
  },
});
