

describe('Test de connexion', () => {
  it('En tant que utilisateur je veux pouvoir me connecter à mon compte', () => {

    // vist the page
    cy.visit(' http://localhost:4200');

    // Taper le username
    cy.get('[data-testId="username"]').contains('hello');


  })
});
