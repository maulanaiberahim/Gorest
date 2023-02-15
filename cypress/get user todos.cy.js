/// <reference types="cypress" />

describe('Get User todos', () => {
    it('Verify get the user todos', () => {
        cy.request({
            method: 'GET',
            url: 'https://gorest.co.in/public/v2/users/463/todos',
            }).as('users')

            cy.get('@users').its('status').should('equal', 200)
          
    });
 });