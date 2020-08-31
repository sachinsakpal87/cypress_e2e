describe('Login /Logut Test',function () {
    before('Setup',function () {
        cy.visit('http://zero.webappsecurity.com/login.html');
    })
    it('should load Login form', function () {
        cy.get('h3').should('have.text','Log in to ZeroBank');
    });

    it('should validate invalid data', function () {
        cy.get('#user_login').type('Fakename Fakesurname');
        cy.get('#user_password').type('Fakename@Fakesurname.com');
        cy.get('#user_remember_me').click();
    });
    it('should submit login form', function () {
        cy.get('.btn-primary').click();
    });
    it('should Validate Error', function () {
        cy.get('.alert-error').contains('Login and/or password are wrong.')
            .and('be.visible');
    });
    it('should validate valid data', function () {
        let user_name;
        let password;
        cy.fixture('user').then((user)=>{
            user_name = user.username;
            password = user.password;
            cy.get('#user_login').type(user_name);
            cy.get('#user_password').type(password);
        })

        cy.get('#user_remember_me').click();
        cy.get('.btn-primary').click();

        cy.get('ul.nav-tabs').should('be.visible');
    });
    it('should logout', function () {
        cy.contains('username').click();
        cy.get('#logout_link').click();
        cy.url().should('include','index.html');

    });
})
