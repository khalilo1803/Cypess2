
let idcatCreated;

describe("Test Dispaly Catgories - Insert Data via (API)", () => {
    
   //Initialisation des données avant chaque Test
   before(() => {
    cy.createCategorie({ nomCat: "categorieCypress", descriptionCat: "DescriptionCypress" }).then((idcat) => {
        idcatCreated = idcat;    // On récupére l'id de la catégorie crée        
        cy.log("ID récupéré : " + idcatCreated);  
    });
  });

  //Nettoyage des données après chaque Test
  after(() => {
    cy.deleteCategorie(idcatCreated);
  });

  it("Vérifier l'affichage de la catégorie créer avec API", () => {
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