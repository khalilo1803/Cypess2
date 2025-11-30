

import 'cypress-file-upload';
Cypress.Commands.add('loginAdmin', () => {
    cy.visit(' http://localhost:4200');
    
    // Taper le username (Admin)
    cy.get('[data-testId="username"]').type('admin');

    // Taper le mot de passe
    cy.get('[data-testId="password"]').type('123');

    // Appuyer sur le boutton "se connecter"
    cy.get('[data-testId="loginBtn"]').click();
});

Cypress.Commands.add('loginUser', () => {

    cy.visit(' http://localhost:4200');
     // Taper le username (User)
    cy.get('[data-testId="username"]').type('charles');

    // Taper le mot de passe
    cy.get('[data-testId="password"]').type('123');

    // Appuyer sur le boutton "se connecter"
    cy.get('[data-testId="loginBtn"]').click();
});

Cypress.Commands.add('createCategorie', (categorie) => {
  cy.request({
    method: 'POST',
    url: 'http://localhost:8081/users/login',
    body: {
      username: 'admin',
      password: '123',
    },
  }).then((resp) => {
     const token = resp.headers['authorization'];
    cy.request({
      method: 'POST',
      url: 'http://localhost:8080/produits/api/cat',
      headers: { Authorization: `Bearer ${token}` },
      body: categorie,
    }).then((resp) => {
        const idCategorieCreated = resp.body.idCat;
        return cy.wrap(idCategorieCreated);
    })
  })
});

Cypress.Commands.add('deleteCategorie', (idCat) => {
  cy.request({
    method: 'POST',
    url: 'http://localhost:8081/users/login',
    body: {
      username: 'admin',
      password: '123',
    },
  }).then((resp) => {
     const token = resp.headers['authorization'];
    cy.request({
      method: 'DELETE',
      url: 'http://localhost:8080/produits/api/cat/delCatById/'+ idCat,
      headers: { Authorization: `Bearer ${token}` },
    });
  })
});

Cypress.Commands.add('deleteProduit', (idProduit) => {
  cy.request({
    method: 'POST',
    url: 'http://localhost:8081/users/login',
    body: {
      username: 'admin',
      password: '123',
    },
  }).then((resp) => {
     const token = resp.headers['authorization'];
    cy.request({
      method: 'DELETE',
      url: 'http://localhost:8080/produits/api/delProdById/'+ idProduit,
      headers: { Authorization: `Bearer ${token}` },
    });
  })
});