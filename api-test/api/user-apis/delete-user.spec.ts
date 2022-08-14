import { generateRandomUsername } from '../../helper/generate-random-username';

const USERNAME = generateRandomUsername();

describe('DELETE /user/{username} API', () => {
  beforeEach(() => {
    cy.loginUser(USERNAME);
  });

  afterEach(() => {
    cy.deleteUser(USERNAME);
  });

  it('User deleted', () => {
    cy.request('DELETE', `/user/${USERNAME}`).then((response) => {
      expect(response.status).to.equal(200);
    });
  });
});
