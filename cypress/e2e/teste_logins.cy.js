describe('Testes de Login - Swag Labs', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
    })

    it('LOGIN_001 - Login com usuário e senha válidos', () => {
        cy.login('standard_user', 'secret_sauce')
        cy.url().should('include', '/inventory.html')
    })

    it('LOGIN_002 - Login com senha incorreta', () => {
        cy.login('standard_user', 'senha_errada')
        cy.get('[data-test="error"]')
            .should('be.visible')
            .and('contain', 'Username and password do not match')
    })

    it('LOGIN_003 - Login com usuário inexistente', () => {
        cy.login('usuario_falso', 'secret_sauce')
        cy.get('[data-test="error"]')
            .should('be.visible')
            .and('contain', 'Username and password do not match')
    })
})
