import { faker } from '@faker-js/faker';

Cypress.Commands.add('cadastraDispositivo', () => {
    cy.request({
        method: 'POST',
        url: 'https://api.restful-api.dev/objects',
        failOnStatusCode: false,
        body: {
            "name": "Celular do leo",
            "data": {
                "year": 2025,
                "price": 1000,
                "CPU model": "Intel Core i9",
                "Hard disk size": "1 TB",
                "owner": "Leonardo Szarblewski"
            }
        }
    })
})

Cypress.Commands.add('buscaDispositivo', (get_id) => {
    cy.request({
            method: 'GET',
            url: `/objects/${get_id}`,   
            failOnStatusCode: false

        }).then((response) => { return response })
})

