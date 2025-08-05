import { faker } from '@faker-js/faker';

describe('Buscar dispositivos', () => {

    it('Busca um dispositivo especifico', () => {
        const get_id = '7'

        cy.buscaDispositivo(get_id).then((response) => {
            expect(response.status).equal(200)
            expect(response.body).not.empty
            expect(response.body.id).equal(get_id)

            expect(response.body.name).equal('Apple MacBook Pro 16')
            expect(response.body.data['CPU model']).equal('Intel Core i9')
        })
        
    });

    it('Busca um dispositivo inexistente', () => {
        const get_id = faker.number.int({ min: 20, max: 999 })

        cy.buscaDispositivo(get_id).then((response) => {
            expect(response.status).equal(404)
            expect(response.body.error).equal(`Oject with id=${get_id} was not found.`)
    
        })
        
    });
});