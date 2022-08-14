import { ORDER } from '../../utils';

describe('DELETE /store/order/{orderId} API', () => {
  beforeEach(() => {
    cy.createOrder(ORDER);
  });

  it('Order deleted', () => {
    cy.request('DELETE', `/store/order/${ORDER.id}`).then((response) => {
      expect(response.status).to.equal(200);
    });
  });

  it('Bad request, order id invalid', () => {
    cy.request({
      method: 'DELETE',
      url: `/store/order/abc`,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(400);
    });
  });
});
