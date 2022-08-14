import { PET } from '../../utils';

describe('POST /pet API', () => {
  afterEach(() => {
    cy.createPet(PET.id);
  });

  it('Success add new pet to the store', () => {
    cy.request('POST', '/pet', PET).then((response) => {
      expect(response.status).to.equal(200);
    });
  });
});
