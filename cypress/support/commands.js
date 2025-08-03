Cypress.Commands.add('cadastra_dispositivo', () => {
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