describe("Test Bonnes Pratiques Cypress", () => {
  

  it("cy.wait à éviter", () => {
    
    cy.intercept('GET', '/produits/api/all').as('getProducts');
   cy.loginAdmin();

    cy.location('pathname').should('eq', '/produits');
    // A eviter
    //cy.wait(7000);

    cy.wait('@getProducts');

    cy.get('[data-testId="table-produits"]').should('exist');


  });

    it("Utiliser Custom Commands", () => {
    
  
    
    cy.loginAdmin();
    cy.intercept('GET', '/produits/api/all').as('getProducts');
     
    cy.location('pathname').should('eq', '/produits');


  });
});