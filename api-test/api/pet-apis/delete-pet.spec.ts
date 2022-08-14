import { PET } from '../../utils';

describe('DELETE /pet/{petId} API', () => {
  beforeEach(() => {
    cy.createPet(PET);
  });

  afterEach(() => {
    cy.deletePet(PET.id);
  });

  it('The pet successfully deleted', () => {
    cy.request('DELETE', `/pet/${PET.id}`).then((response) => {
      expect(response.status).to.equal(200);
    });
  });

  it('Bad request, pet id is invalid', () => {
    cy.request({
      method: 'DELETE',
      url: `/pet/loremipsum}`,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(400);
    });
  });
});
