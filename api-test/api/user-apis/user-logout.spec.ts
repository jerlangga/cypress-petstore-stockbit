import { generateRandomUsername } from '../../helper/generate-random-username';

const USERNAME = generateRandomUsername();

describe('GET /user/logout API', () => {
  beforeEach(() => {
    cy.loginUser(USERNAME);
  });

  afterEach(() => {
    cy.deleteUser(USERNAME);
  });

  it('Logs out current logged in user session. Logout success', () => {
    cy.request('GET', `/user/logout`).then((response) => {
      expect(response.status).to.equal(200);
    });
  });
});
