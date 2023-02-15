describe('Delete User', () => {
    it('Verify the status is 204', () => {

        cy.request({
            method: 'DELETE',
            url: 'https://gorest.co.in/public/v2/users/461',
            headers: {
                Authorization: 'Bearer c4e63dff9ecc57846fc792b3052b7325169f1a0267d991c7f3a73b84eeba630a'
            },
        })
            .then((response) => {
            expect(response.status).equal(204)
            })
    });
 });