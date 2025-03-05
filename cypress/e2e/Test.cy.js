describe('Ödev Testler', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/')
    cy.get('#exampleEmail').type("erdem.guntay@wit.com.tr");
    cy.get('#examplePassword').type("9fxIH0GXesEwH_I");
    cy.get('#terms').check();
    cy.get('button').click();
    cy.url().should('include', '/success');
  })

  it('passes', () => {
    cy.visit('http://localhost:5173/')
    cy.get('#exampleEmail').type("erdem.guntay@wit.com.tr");
    cy.get('#examplePassword').type("yanlisSifre");
    cy.get('#terms').check();
    cy.get('button').click();
    cy.url().should('include', '/error');
  })
})