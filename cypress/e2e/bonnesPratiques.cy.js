describe("Test Bonnes Pratiques Cypress", () => {
  

  it("cy.wait à éviter", () => {
    
    cy.intercept('GET', '/produits/api/all').as('getProducts');
    // vist the page
    cy.visit(' http://localhost:4200');

    // Taper le username (Admin)
    cy.get('[data-testId="username"]').type('admin');

    // Taper le mot de passe
    cy.get('[data-testId="password"]').type('123');

    // Appuyer sur le boutton "se connecter"
    cy.get('[data-testId="loginBtn"]').click();

    cy.location('pathname').should('eq', '/produits');
    // A eviter
    cy.wait(7000);

    //cy.wait('@getProducts');

    cy.get('[data-testId="table-produits"]').should('exist');


  });

    it("Utiliser Custom Commands", () => {
    /*
    // vist the page
    cy.visit(' http://localhost:4200');

    // Taper le username (Admin)
    cy.get('[data-testId="username"]').type('admin');

    // Taper le mot de passe
    cy.get('[data-testId="password"]').type('123');

    // Appuyer sur le boutton "se connecter"
    cy.get('[data-testId="loginBtn"]').click();

    */
    cy.loginAdmin();
    cy.intercept('GET', '/produits/api/all').as('getProducts');
     
    cy.location('pathname').should('eq', '/produits');


  });
});