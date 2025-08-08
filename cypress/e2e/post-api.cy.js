describe('Cadastro de dispositivos', () => {

    const body = require('../fixtures/cadastraDevice.json')

    it('Cadastra um dispositivo', () => {
        const dataAtual = new Date().toISOString().slice(0, 10);

            cy.cadastraDispositivo(body).then((response) => {
                expect(response.status).equal(200)
                expect(response.body.id).not.empty
                expect(response.body.createdAt.slice(0, 10)).equal(dataAtual)
                expect(response.body.data.owner).equal('Leonardo Szarblewski')

            })

    });

    it('Cadastra um dispositivo sem body', () => {
        cy.cadastraDispositivo('').then((response) => {
          expect(response.status).equal(400)  
        })
    });
});