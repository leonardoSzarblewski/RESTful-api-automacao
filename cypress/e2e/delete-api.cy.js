import { faker } from '@faker-js/faker';

describe('Deletar dispositivos', () => {

    const body = require('../fixtures/cadastraDevice.json')
    it('Deleta um dispositivo', () => {
        cy.cadastraDispositivo(body).then((resp_post) => {
            expect(resp_post.status).equal(200)

            cy.deletaDispositivo(resp_post.body.id).then((resp_delete) => {
                expect(resp_delete.status).equal(200)
                expect(resp_delete.body.message)
                    .equal(`Object with id = ${resp_post.body.id} has been deleted.`)

            })
        })
    });

    it('Deleta um dispositivo que não existe', () => {
        const id = faker.number.int({ min: 20, max: 999 })

        cy.deletaDispositivo(id).then((resp_delete) => {
            expect(resp_delete.status).equal(404)
            expect(resp_delete.body.error)
                .equal(`Object with id = ${id} doesn't exist.`)

        })
    })

    it('Não permite deletar dispositivos com ids reservados', () => {
        const id_reservado = faker.number.int({ min: 1, max: 13 })

        cy.deletaDispositivo(id_reservado).then((resp_delete) => {
            expect(resp_delete.status).equal(405)
            expect(resp_delete.body.error)
                .equal(`${id_reservado} is a reserved id and the data object of it cannot be deleted. You can create your own new object via POST request and try to send a DELETE request with new generated object id.`)

        })
    })
});
