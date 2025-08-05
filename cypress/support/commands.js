Cypress.Commands.add('cadastraDispositivo', (payload) => {
    cy.request({
        method: 'POST',
        url: '/objects',
        failOnStatusCode: false,
        body: payload 

    })
})

Cypress.Commands.add('buscaDispositivo', (get_id) => {
    cy.request({
        method: 'GET',
        url: `/objects/${get_id}`,
        failOnStatusCode: false

    }).then((response) => { return response })
})

