describe('Cadastro de dispositivos', () => {

    it('Cadastra um dispositivo', () => {
        const dataAtual = new Date().toISOString().slice(0, 10);

        cy.request({
            method: 'POST',
            url: 'https://api.restful-api.dev/objects',
            failOnStatusCode: false,
            body: {
                "name": "Celular da Brenda",
                "data": {
                    "year": 2025,
                    "price": 2000,
                    "CPU model": "Intel Core i9",
                    "Hard disk size": "1 TB",
                    "owner": "Brenda Kappel"
                }
            }
        }).then((resp) => {
            expect(resp.status).equal(200)
            expect(resp.body.id).not.empty
            expect(resp.body.createdAt.slice(0, 10)).equal(dataAtual)
            expect(resp.body.data.owner).equal('Brenda Kappel')
            
        })

    });
});