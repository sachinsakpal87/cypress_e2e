describe('Feedback Test',function () {
    before('Setup',function () {
        cy.visit('http://zero.webappsecurity.com/feedback.html');
    })
    it('should load feedback form', function () {
        cy.get('#feedback-title').should('have.text','Feedback');
    });
    it('should fill feedback form', function () {
        cy.get('#name').type('Fakename Fakesurname');
        cy.get('#email').type('Fakename@Fakesurname.com');
        cy.get('#subject').type('Fakename@Fakesurname.com');
        cy.get('#comment').type('Hello World !!!');
    });
    it('should submit feedback form', function () {
        cy.get('.btn-signin').click();
    });
    it('should display feedback message', function () {
        cy.contains('Thank you for your comments, Fakename Fakesurname. They will be reviewed by our Customer Service staff and given the full attention that they deserve.');
    });
})
