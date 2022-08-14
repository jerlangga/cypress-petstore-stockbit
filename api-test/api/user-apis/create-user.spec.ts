import { generateRandomUsername } from '../../helper/generate-random-username';

const USERNAME = generateRandomUsername();
const USER_OBJECT = {
  id: 1,
  username: USERNAME,
  firstName: `${USERNAME}`,
  lastName: `${USERNAME}`,
  email: `${USERNAME}@rocketmail.com`,
  password: 'T3st1ng123!',
  phone: 'T3st1ng123',
  userStatus: 1,
};

describe('POST /user API', () => {
  it('Create new user success', () => {
    cy.request('POST', '/user', USER_OBJECT).then((response) => {
      expect(response.status).to.equal(200);
    });
  });
});
