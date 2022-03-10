describe('Testing text in h1', () => {
    it('Should find selected text', () => {
        cy.visit('localhost:8080')
        cy.get('h1').contains('PONYAC!')
    })
    it('Should find selected images', () => {
        cy.get('body').find('img').should('have.attr', 'src').should('include','/public/img/issa.jpg ')
    })
})
