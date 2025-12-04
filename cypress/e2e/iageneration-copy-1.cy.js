describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
});

it('studio Test', function() {
  cy.visit('http://localhost:4200')
  cy.get('[data-testid="username"]').type('admin');
  cy.get('[data-testid="password"]').type('123');
  cy.get('[data-testid="loginBtn"]').should('have.text', 'Connexion');
  cy.get('[data-testid="loginBtn"]').click();
  
  cy.get('[data-testid="table-produits"] th:nth-child(3)').click();
});