describe('Create a user todos', () => {
    it('Verify', () => {
        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users/463/todos',
            headers: {
                Authorization: 'Bearer c4e63dff9ecc57846fc792b3052b7325169f1a0267d991c7f3a73b84eeba630a'
            },
            body: {
                title: "aksjdo",
                status: "incomplete"
            }
        })
            .then((response) => {
            expect(response.status).equal(201)
            })
    });
 });