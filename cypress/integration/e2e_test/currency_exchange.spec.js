describe('Currency Exchange Test', () => {
    before(function() {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.get('#signin_button').click()
        cy.fixture('user').then(user => {
            const username = user.username
            const password = user.password
            cy.login(username, password)
        })
    })

    it('should fill conversion form', () => {
        cy.get('#pay_bills_tab').click()
        cy.contains('Purchase Foreign Currency').click()
        cy.get('#pc_currency').select('GBP')
        cy.get('#pc_amount').type('1000')
        cy.get('#pc_inDollars_true').click()
        cy.get('#pc_calculate_costs').click();

        // cy.get('#purchase_cash').click()
    })

    it('should display conversion amount', () => {
        cy.get('#pc_conversion_amount')
            .should('contain','590.25 pound (GBP) = 1000.00 U.S. dollar (USD)');
    })
})
