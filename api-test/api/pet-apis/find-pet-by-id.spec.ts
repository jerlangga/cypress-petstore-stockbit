import { PET } from '../../utils';

describe('GET /pet/{petId} API', () => {
  beforeEach(() => {
    cy.createPet(PET);
  });

  afterEach(() => {
    cy.deletePet(PET.id);
  });

  it('Find pet by id', () => {
    cy.request('GET', `/pet/${PET.id}`).then((response) => {
      expect(response.status).to.equal(200);
    });
  });

  it('Get pet object response', () => {
    cy.request('GET', `/pet/${PET.id}`).then((response) => {
      expect(response.body).to.deep.equal(PET);
    });
  });

  it('Bad request, pet id not found', () => {
    cy.deletePet(PET.id);
    cy.request({
      method: 'GET',
      url: `/pet/${PET.id}`,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(404);
    });
  });

  it('Bad request, pet id is invalid', () => {
    cy.request({
      method: 'GET',
      url: `/pet/anggi`,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(400);
    });
  });
});
