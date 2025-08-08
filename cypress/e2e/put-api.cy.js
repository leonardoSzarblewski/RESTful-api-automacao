describe('Alterar dispositivos', () => {
    
    const body_post = require('../fixtures/cadastraDevice.json')
    const body_put = require('../fixtures/atualizaDevice.json')


    it('Altera um dispositivo', () => {

        cy.cadastraDispositivo(body_post).then((resp_post) => {
            expect(resp_post.status).equal(200)
            expect(resp_post.body.name).equal('Celular do leo')
            expect(resp_post.body.data.owner).equal('Leonardo Szarblewski')
            expect(resp_post.body.data.price).equal(1000)
            
            cy.request({
                method: 'PUT',
                url: `/objects/${resp_post.body.id}`,
                failOnStatusCode: false,
                body: body_put
                
            }).then((resp_put) => {
                expect(resp_put.status).equal(200)
                expect(resp_put.body.name).equal('Celular do Matheus')
                expect(resp_put.body.data.owner).equal('Matheus Szarblewski')
                expect(resp_put.body.data.price).equal(1999)

            })
        })
    });
});