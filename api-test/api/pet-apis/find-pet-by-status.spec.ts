import { PET } from '../../utils';
import { PetInterface } from '../../types';
PET.status = 'sold';

describe('GET /pet/findByStatus API', () => {
  beforeEach(() => {
    cy.createPet(PET);
  });

  afterEach(() => {
    cy.deletePet(PET.id);
  });

  it('Find pets by valid status, available, pending, or sold', () => {
    cy.request('GET', `/pet/findByStatus?status=sold`).then((response) => {
      expect(response.status).to.equal(200);
    });
  });

  it('Bad request, status isnt on the list', () => {
    cy.deletePet(PET.id);
    cy.request({
      method: 'GET',
      url: `/pet/findByStatus?status=nothing`,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(400);
    });
  });
});

function doesObjectExsistsInArray(
  pets: PetInterface[],
  pet: PetInterface,
): boolean {
  return pets.includes(pet);
}
