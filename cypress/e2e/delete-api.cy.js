describe('Deletar dispositivos', () => {

    it('Deletar um dispositivo', () => {
        
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
});