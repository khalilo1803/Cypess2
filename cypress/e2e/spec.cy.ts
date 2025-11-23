

describe('Test de connexion', () => {
  it('En tant que utilisateur je veuxmm pouvoir me connecter à mon compte', () => {
    
    // vist the page
    cy.visit(' http://localhost:4200');

    // Taper le username
    cy.get('[data-testId="username"]').type('charles');

    // Taper le mot de passe
    cy.get('[data-testId="password"]').type('123');

    // Appuyer sur le boutton "se connecter"
    cy.get('[data-testId="loginBtn"]').click();

    cy.location('pathname').should('eq', '/produits')

  })
});
