/// <reference types="cypress" />

describe('Get Users 438', () => {
    it('Verify the user will displayed', () => {
        cy.request({
            method: 'GET',
            url: 'https://gorest.co.in/public/v2/users/438',
          }).as('users')
          cy.get('@users').its('body').should('include', {name:'Basanti Ganaka'})
    });
 });