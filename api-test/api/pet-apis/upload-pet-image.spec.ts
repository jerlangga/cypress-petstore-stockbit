import { PET } from '../../utils';

describe('POST /pet/{petId}/uploadImage API', () => {
    beforeEach(() => {
        cy.deletePet(PET);
    });

    afterEach(() => {
        cy.createPet(PET.id);
    });

    it('Success add new pet image', () => {
        cy.request('POST', `/pet/${PET.id}/uploadImage`, PET).then((response) => {
            expect(response.status).to.equal(200);
        });
    });
});
