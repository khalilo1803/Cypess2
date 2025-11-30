
let idcatCreated;
let idProductCreated;

describe("Test Scenario Complet", () => {
    
   //Initialisation des données avant chaque Test
   before(() => {
    cy.createCategorie({ nomCat: "categorieCypress", descriptionCat: "DescriptionCypress" }).then((idcat) => {
        idcatCreated = idcat;    // On récupére l'id de la catégorie crée        
        cy.log("ID récupéré : " + idcatCreated);  
    });
  });

  //Nettoyage des données après chaque Test
  after(() => {
    cy.deleteProduit(idProductCreated).then(() => {
        cy.deleteCategorie(idcatCreated);
    })
  });

  it("Creation Produit Admin", () => {
    cy.then(() => {

        cy.intercept('POST', 'produits/api/addProd').as('addproduct');
        cy.loginAdmin();
        cy.location('pathname').should('eq', '/produits');

        cy.get('[data-testId="produits-menu"]').click();

        cy.get('[data-testId="ajouter-produit-menu"]').click();

        cy.location('pathname').should('eq', '/add-produit');

        cy.get('[data-testId="nom-produit-input"]').type('admin');

        cy.get('[data-testId="prix-produit-input"]').type('15');
        cy.get('[data-testId="date-produit-input"]').type('2025-05-15');
        cy.get('[data-testId="select-categorie"]').select('categorieCypress').should('have.value', idcatCreated);

        cy.get('[data-testId="upload-image-input"]')
        .attachFile('nde2.png');

        cy.get('[data-testId="add-produit-btn"]').click();

        cy.wait('@addproduct').then((interception) => {
            cy.get('[data-testId="success-message"]').should('exist');
            idProductCreated = interception.response.body.idProduit;

        })
    
    });

  });

    it("Consulter Produit User", () => {
    cy.then(() => {
        cy.intercept('GET', '/produits/api/all').as('getProducts');
        cy.loginUser();
        cy.location('pathname').should('eq', '/produits');
        cy.wait('@getProducts');
        cy.get('[data-testId="produit-detail-'+ idProductCreated +'"]').click();

        cy.location('pathname').should('eq', '/seeDetails/'+idProductCreated);

    });
  });

});