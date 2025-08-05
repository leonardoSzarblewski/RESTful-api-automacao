describe('Cadastro de dispositivos', () => {

    it('Cadastra um dispositivo', () => {
        const dataAtual = new Date().toISOString().slice(0, 10);

        const body = {
            "name": "Celular de Brenda",
            "data": {
                "year": 2025,
                "price": 1999,
                "CPU model": "Intel Core i9",
                "Hard disk size": "1 TB",
                "owner": "Brenda Kappel"
            }
        }

            cy.cadastraDispositivo(body).then((response) => {
                expect(response.status).equal(200)
                expect(response.body.id).not.empty
                expect(response.body.createdAt.slice(0, 10)).equal(dataAtual)
                expect(response.body.data.owner).equal('Brenda Kappel')

            })

    });
});