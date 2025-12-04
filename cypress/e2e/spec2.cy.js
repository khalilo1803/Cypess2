describe("Démo IA avec cy.prompt", () => {
  it("génère un test automatiquement via IA", () => {
    
    cy.prompt([
      "Écris un test Cypress qui visite la page http://localhost:4200, saisit admin en username et 123 en password, clique sur connexion "]
    );

  });
});