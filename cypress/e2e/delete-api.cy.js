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

    
});
