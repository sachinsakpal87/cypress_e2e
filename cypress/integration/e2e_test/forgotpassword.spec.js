describe('Forgot password page',function () {
    before('Setup',function () {
        cy.visit('http://zero.webappsecurity.com/');
    })
    it('should click signin', function () {
        cy.get('#signin_button').click();
    });
    it('should ', function () {
        cy.get('.offset3 > a').click();
    });
    it('should fill an email', function () {
        cy.get('#user_email').type('fakemail.devmail@apmail.com');
    });
    it('should submit the form', function () {
        cy.contains('Send Password').click();
    });
})
