import { ORDER } from '../../utils';

describe('POST /store/order API', () => {
  it('Order successfully created', () => {
    cy.request('POST', '/store/order', ORDER).then((response) => {
      expect(response.status).to.equal(200);
    });
  });

  it('Order failed', () => {
    cy.request({
      method: 'POST',
      url: '/store/order',
      body: { ...ORDER, id: 'lets' },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(400);
    });
  });
});
