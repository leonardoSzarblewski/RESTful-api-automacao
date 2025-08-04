import { faker } from '@faker-js/faker';

describe('Deletar dispositivos', () => {

    it('Deleta um dispositivo', () => {
        cy.cadastra_dispositivo().as('postDevice')

        cy.get('@postDevice').then((resp_post) => {
            expect(resp_post.status).equal(200)

            cy.request({
                method: 'DELETE',
                url: `https://api.restful-api.dev/objects/${resp_post.body.id}`,
                failOnStatusCode: false,

            }).then((resp_delete) => {
                expect(resp_delete.status).equal(200)
                expect(resp_delete.body.message)
                    .equal(`Object with id = ${resp_post.body.id} has been deleted.`)

            })
        })
    });

    it('Deleta um dispositivo que não existe', () => {
        const id = faker.number.int({ min: 20, max: 999 })

        cy.request({
            method: 'DELETE',
            url: `https://api.restful-api.dev/objects/${id}`,
            failOnStatusCode: false,

        }).then((resp_delete) => {
            expect(resp_delete.status).equal(404)
            expect(resp_delete.body.error)
                .equal(`Object with id = ${id} doesn't exist.`)

        })
    })

    it('Não permite deletar dispositivos com ids reservados', () => {
        const id_reservado = faker.number.int({ min: 1, max: 13 })

        cy.request({
            method: 'DELETE',
            url: `https://api.restful-api.dev/objects/${id_reservado}`,
            failOnStatusCode: false,

        }).then((resp_delete) => {
            expect(resp_delete.status).equal(405)
            expect(resp_delete.body.error)
                .equal(`${id_reservado} is a reserved id and the data object of it cannot be deleted. You can create your own new object via POST request and try to send a DELETE request with new generated object id.`)

        })
    })
});
