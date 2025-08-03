describe('Alterar dispositivos', () => {

    it('Alterar um dispositivo', () => {

        cy.request({
            method: 'POST',
            url: 'https://api.restful-api.dev/objects',
            failOnStatusCode: false,
            body: {
                "name": "Celular do leo",
                "data": {
                    "year": 2025,
                    "price": 1000,
                    "CPU model": "Intel Core i9",
                    "Hard disk size": "1 TB",
                    "owner": "Leonardo Szarblewski"

                }
            }
        }).as('postDevice')

        cy.get('@postDevice').then((resp_post) => {
            expect(resp_post.status).equal(200)
            expect(resp_post.body.name).equal('Celular do leo')

            cy.request({
                method: 'PUT',
                url: `https://api.restful-api.dev/objects/${resp_post.body.id}`,
                failOnStatusCode: false,
                body: {
                    "name": "Celular do Matheus",
                    "data": {
                        "year": 2025,
                        "price": 1999,
                        "CPU model": "Intel Core i9",
                        "Hard disk size": "1 TB",
                        "owner": "Matheus Szarblewski"

                    }
                }
            }).then((resp_put) => {
                expect(resp_put.status).equal(200)
                expect(resp_put.body.name).equal('Celular do Matheus')

            })
        })
    });
});