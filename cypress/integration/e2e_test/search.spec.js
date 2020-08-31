describe('Search Text Box Test', function () {

    before('Setup', function () {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

    it('should type into searchbox and submit with enter', function () {
        cy.get('#searchTerm').type('Hello World {enter}');
    });

    it('should show seach result page', function () {
        cy.get('h2').contains('Search Results:')
    });
})
