import { PET } from '../../utils';

describe('PUT /pet API', () => {
  beforeEach(() => {
    cy.createPet(PET);
  });

  afterEach(() => {
    cy.deletePet(PET.id);
  });

  it('Update an existing pet', () => {
    const PET_UPDATED = {
      id: 10,
      name: 'kitten',
      category: {
        id: 1,
        name: 'Cats',
      },
      tags: [
        {
          id: 0,
          name: 'cat',
        },
      ],
      status: 'available',
    };
    cy.request('PUT', `/pet`, PET_UPDATED).then((response) => {
      expect(response.status).to.equal(200);
    });
  });

  it('Update pet failed, pet id not found', () => {
    const PET_UPDATED = {
      id: 100,
      name: 'kitten',
      category: {
        id: 1,
        name: 'Cats',
      },
      tags: [
        {
          id: 0,
          name: 'cat',
        },
      ],
      status: 'available',
    };
    cy.deletePet(PET.id);
    cy.request({
      method: 'PUT',
      url: `/pet`,
      body: PET_UPDATED,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(404);
    });
  });
});
