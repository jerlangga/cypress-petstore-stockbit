import { ORDER } from '../../utils';

describe('GET /store/order/{orderId} API', () => {
  beforeEach(() => {
    cy.createOrder(ORDER);
  });

  afterEach(() => {
    cy.deleteOrder(ORDER.id);
  });

  it('Find purchase order by id success', () => {
    cy.request('GET', `/store/order/${ORDER.id}`).then((response) => {
      expect(response.status).to.equal(200);
    });
  });

  it('Find purchase order by id failed, order id not found', () => {
    cy.deleteOrder(ORDER.id);
    cy.request({
      method: 'GET',
      url: `/store/order/${ORDER.id}`,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(404);
    });
  });

  it('Bad request', () => {
    cy.deleteOrder(ORDER.id);
    cy.request({
      method: 'GET',
      url: `/store/order/falses`,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(400);
    });
  });
});
