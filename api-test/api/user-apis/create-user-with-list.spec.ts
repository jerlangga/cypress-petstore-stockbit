import { generateRandomUsername } from '../../helper/generate-random-username';

const USERNAME = generateRandomUsername();
const USER_OBJECT_LIST = [
  {
    id: 2,
    username: USERNAME,
    firstName: `${USERNAME}`,
    lastName: `${USERNAME}`,
    email: `${USERNAME}@rocketmail.com`,
    password: 'T3st1ng123',
    phone: 'T3st1ng123',
    userStatus: 1,
  },
];

describe('POST /user/createWithList API', () => {
  it('Creates list of users with given input array success', () => {
    cy.request('POST', '/user/createWithList', USER_OBJECT_LIST).then(
      (response) => {
        expect(response.status).to.equal(200);
      },
    );
  });
});
