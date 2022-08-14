import { ORDER } from '../../utils';

describe('GET /store/inventory API', () => {
  beforeEach(() => {
    cy.createOrder(ORDER);
  });

  it('Returns pet inventory by status success', () => {
    cy.request('GET', `/store/inventory`).then((response) => {
      expect(response.status).to.equal(200);
    });
  });
});
