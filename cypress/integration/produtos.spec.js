/// <reference types="cypress" />
var faker = require('faker');

describe('Funcionalidade Página de Produtos', () => {

    beforeEach(() => {
        cy.visit('produtos/page/2/')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
            //.first()
            //.last()
            //.eq(3)
            .contains('Atomic Endurance Running Tee (Crew-Neck)')
            .click()
    });

    it('Deve adicionar um produto no carrinho', () => {
        var qtd = 3

        cy.get('[class="product-block grid"]')
            .contains('Atomic Endurance Running Tee (Crew-Neck)').click()
        cy.get('.button-variable-item-L').click()
        cy.get('.button-variable-item-Red').click()
        cy.get('.input-text').clear().type(qtd)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', qtd)
        cy.get('.woocommerce-message').should('contain', ' 3 × “Atomic Endurance Running Tee (Crew-Neck)” foram adicionados no seu carrinho.')

    });

    it('Deve adicionar produtos ao carrinho - Usando Comando customizado', () => {
        cy.addProdutos('Atomic Endurance Running Tee (Crew-Neck)', 'L', 'Red', 1)
        cy.get('.single_add_to_cart_button').click()
    });

    it('Deve adicionar produtos ao carrinho - Usando Comando customizado', () => {
        cy.addProdutos('ugusta Pullover Jacket', 'L', 'Red', 1)
        cy.get('.single_add_to_cart_button').click()
    });

    it('Deve adicionar produtos ao carrinho - Usando Comando customizado', () => {
        cy.visit('produtos/page/3/')
        cy.addProdutos('Celeste Sports Bra', 'M', 'Green', 1)
        cy.get('.single_add_to_cart_button').click()
    });

    it('Deve adicionar produtos ao carrinho - Usando Comando customizado', () => {
        cy.addProdutos('Atomic Endurance Running Tee (Crew-Neck)', 'S', 'Red', 2)
        cy.get('.single_add_to_cart_button').click()

        //cy.get('.woocommerce-message').should('contain', ' × “Apollo Running Short” foram adicionados no seu carrinho.')
    });
})