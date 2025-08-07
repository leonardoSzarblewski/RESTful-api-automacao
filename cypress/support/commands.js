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

    })
})

Cypress.Commands.add('deletaDispositivo', (delete_id) => {
    cy.request({
        method: 'DELETE',
        url: `/objects/${delete_id}`,
        failOnStatusCode: false

    })
})


