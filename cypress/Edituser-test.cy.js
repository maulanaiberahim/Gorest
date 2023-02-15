describe('Edit User', () => {
    it('Verify the status is 200', () => {
        var newuser = {
            "name": "lala",
            "email": "lala@lala.co",
            "gender": "male",
            "status": "inactive"

        } 

        cy.request({
            method: 'PUT',
            url: 'https://gorest.co.in/public/v2/users/459',
            headers: {
                Authorization: 'Bearer c4e63dff9ecc57846fc792b3052b7325169f1a0267d991c7f3a73b84eeba630a'
            },
            newuser
        })
            .then((response) => {
            expect(response.status).equal(200)
            })
    });
 });