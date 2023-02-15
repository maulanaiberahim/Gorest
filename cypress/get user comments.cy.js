/// <reference types="cypress" />

describe('Get User Comments', () => {
    it('Verify get the user comments', () => {
        cy.request({
            method: 'GET',
            url: 'https://gorest.co.in/public/v2/posts/463/comments',
            }).as('users')

            cy.get('@users').its('status').should('equal', 200)
          
    });
 });