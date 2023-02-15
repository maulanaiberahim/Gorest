describe('Create a new post comments', () => {
    it('Verify', () => {
        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v2/posts/463/comments',
            headers: {
                Authorization: 'Bearer c4e63dff9ecc57846fc792b3052b7325169f1a0267d991c7f3a73b84eeba630a'
            },
            body: {
                name: "abc",
                email: "abc@abc.co",
                body: "def"
            }
        })
            .then((response) => {
            expect(response.status).equal(201)
            })
    });
 });