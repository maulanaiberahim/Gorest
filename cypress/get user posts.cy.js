/// <reference types="cypress" />

describe('Get User Posts', () => {
    it('Verify get the user posts', () => {
        cy.request({
            method: 'GET',
            url: 'https://gorest.co.in/public/v2/users/463/posts',
            }).as('users')

            cy.get('@users').its('status').should('equal', 200)
          
    });
 });