describe("Test Dispaly Catgories - Insert Data via (SQL)", () => {
  
   //Initialisation des données avant chaque Test
   before(() => {
    cy.task(
    "queryDb",
    "INSERT INTO `categorie` (`id_cat`, `description_cat`, `nom_cat`) VALUES (NULL, 'DescriptionCypress', 'categorieCypress');"
    );
  });

  //Nettoyage des données après chaque Test
  afterEach(() => {
    cy.task(
    "queryDb",
    " DELETE FROM categorie WHERE nom_cat='categorieCypress';"
    );
  });

  it("Vérifier l'affichage de la catégorie créer avec SQL", () => {
    // vist the page
    cy.visit(' http://localhost:4200');

    // Taper le username (Admin)
    cy.get('[data-testId="username"]').type('admin');

    // Taper le mot de passe
    cy.get('[data-testId="password"]').type('123');

    // Appuyer sur le boutton "se connecter"
    cy.get('[data-testId="loginBtn"]').click();

    cy.location('pathname').should('eq', '/produits');

    cy.get('[data-testId="produits-menu"]').click();

    cy.get('[data-testId="categorie-menu"]').click();

    cy.location('pathname').should('eq', '/listeCategories');

    // Taper le nom de la catégorie dans le champs de recherche
    cy.get('[data-testId="recherche-categorie"]').type('categorieCypress');

    cy.get('[data-testId="ligne-categorie-categorieCypress"]').should('exist');

  });
});