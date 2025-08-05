describe('Buscar dispositivos', () => {
    

    it('Buscar um dispositivo especifico', () => {
        const get_id = '7'

        cy.request({
            method: 'GET',
            url: `/objects/${get_id}`,   
            failOnStatusCode: false

        }).then((resp) => {
            expect(resp.status).equal(200)
            expect(resp.body).not.empty
            expect(resp.body.id).equal(get_id)

            expect(resp.body.name).equal('Apple MacBook Pro 16')
            expect(resp.body.data['CPU model']).equal('Intel Core i9')
        })
        
    });
});