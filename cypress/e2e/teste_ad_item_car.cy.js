describe('Adicionar item ao carrinho', () => {
    it('COMPRA_001 - Deve adicionar um item ao carrinho após login', () => {
        cy.visit('https://www.saucedemo.com/')

        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()

        cy.url().should('include', '/inventory.html')


        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()


        cy.get('.shopping_cart_badge').should('contain', '1')
    })
})
