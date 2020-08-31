describe('Forgot password page',function () {
    before('Setup',function () {
        cy.visit('http://zero.webappsecurity.com/');
    })
    it('should display online banking content', function () {
        cy.get('#onlineBankingMenu').click();
        cy.url().should('include','online-banking.html');
        cy.get('h1').should('contain','Online Banking');
    });
    it('should display feeback', function () {
        cy.get('#feedback').click();
        cy.url().should('include','feedback.html');
        cy.get('#feedback-title').should('have.text','Feedback');
    });
    it('should display homepage', function () {
        cy.get('.brand').click();
        cy.url().should('include','index.html');
    });
})
