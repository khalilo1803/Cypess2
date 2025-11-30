
let idcatCreated;
describe('Test de connexion', () => {
  it('En tant que utilisateur je veuxmm pouvoir me connecter à mon compte', () => {
    // Insertion via api
cy.createCategorie({ nomCat: "jjj", descriptionCat: "jjjdd" }).then((idcat) => {
  idcatCreated = idcat;             // 👈 tu stockes ici
  cy.log("ID récupéré : " + idcatCreated);  // 👈 tu logs la bonne variable
});
    
    // Insertion via SQL
    cy.task(
      "queryDb",
      "INSERT INTO `categorie` (`id_cat`, `description_cat`, `nom_cat`) VALUES (NULL, 'ooooo', 'oooo');"
    );
     cy.then(() => {
    // vist the page
    cy.visit(' http://localhost:4200');

    // Taper le username
    cy.get('[data-testId="username"]').type(idcatCreated);

    // Taper le mot de passe
    cy.get('[data-testId="password"]').type('123');

    // Appuyer sur le boutton "se connecter"
    cy.get('[data-testId="loginBtn"]').click();

    cy.location('pathname').should('eq', '/produits');
    });

  })
});
