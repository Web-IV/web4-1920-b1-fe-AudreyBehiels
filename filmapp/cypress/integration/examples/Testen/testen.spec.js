describe('Mijn Testen', function () {

  it('login', function () {
    cy.visit({
     url: '/account'});
     cy.request('POST', '/login', {
      
        username: "audrey.behiels@gmail.com",
        password:"P@ssword1111"
     
  });
    /*  methode:'POST',
    body:{
      username: "audrey.behiels@gmail.com",
      password:"P@ssword1111"
    }*/
  
  });

  it('Mijn app runt', function () {
    cy.visit('');
    cy.get('[data-cy=filmCard]').should('have.length', 11);
  });

  it('Filter op begin van titel', function () {
      cy.visit('');
      cy.get('[data-cy=filterFilmTitelInput]').type('The');
      cy.get('[data-cy=filmCard]').should('have.length', 3);
    }),
    it('Filter op titel: 1 film', function () {
      cy.visit('');
      cy.get('[data-cy=filterFilmTitelInput]').type('Titanic');

      cy.get('[data-cy=filmCard]').should('have.length', 1);
    }),

    it('Mock film GET', function () {
      cy.server();
      cy.route({
        method: 'GET',
        url: '/api/films',
        status: 200,
        response: [{
          titel: "Footloose",
          jaar: "1997",
          duur: "194",
          regisseur: "James Cameron",
          filmGenres: ["Drama", "Romantiek"],
          filmSchrijvers: ["James Cameron"],
          filmActeurs: [
            "Leonardo DiCaprio",
            "Kate Winslet",
            "Kathy Bates",
            "Billy Zane",
          ],
          productiebedrijf: "Paramount Pictures",
          korteInhoud: ""
        }],
      });
      cy.visit('/');
      cy.get('[data-cy=filmCard]').should('have.length', 1);
    });

  it('Filter op genre', function () {
      cy.visit('');
      cy.get('mat-select').first().click();
      cy.get('.mat-option')
        .contains('Avontuur')
        .then(option => {
          option[0].click();
        });
      cy.get('[data-cy=filmCard]').should('have.length', 5);
    }),
    it('Filter op jaar', function () {
      cy.visit('');
      cy.get('[data-cy=filterFilmJaarInput]').type('1997');
      cy.get('.formJaar').click();

      cy.get('[data-cy=filmCard]').should('have.length', 1);
    }),

    it('op fout moet een foutmelding worden weergegeven', function () {
      cy.server();
      cy.route({
        method: 'GET',
        url: '/api/films',
        status: 500,
        response: 'ERROR'
      });
      cy.visit('/');
      cy.get('[data-cy=appError]').should('be.visible');
    });


});
