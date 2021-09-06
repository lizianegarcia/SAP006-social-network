/**
 * @jest-environment jsdom
 */

import {
  describe, expect, it, jest,
} from '@jest/globals';
import createPage from '../../src/pages/login/index.js';
import { signUp } from '../../src/pages/login/signUp.js';
import { changePage } from '../../src/routes/changePage.js';
import firebase from '../../src/services/firebase.js';

jest.mock('../../src/services/firebase.js');
jest.mock('../../src/routes/changePage.js');

describe('signUp', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should signUp successful', async () => {
    const page = createPage();

    const name = 'anakin';
    const email = 'anakin@sky.net';
    const password = 'starwars';

    await signUp(page, name, email, password);
    expect(firebase.signUp).toHaveBeenCalledWith(name, email, password);
    expect(changePage).toHaveBeenCalledWith('/');
  });

  it('should fail when signUp', async () => {
    firebase.signUp.mockRejectedValueOnce({ code: 'auth/email-already-in-use' });

    const page = createPage();
    const name = 'anakin';
    const email = 'anakin@sky.net';
    const password = 'starwars';
    const signUpError = page.querySelector('#sign-up-error');

    await signUp(page, name, email, password);

    expect(firebase.signUp).toHaveBeenCalledWith(name, email, password);
    expect(signUpError.innerHTML).toEqual('Ops, e-mail já registrado!');
  });

  it('should fail when signUp error', async () => {
    firebase.signUp.mockRejectedValueOnce('error');

    const page = createPage();
    const name = 'anakin';
    const email = 'anakin@sky.net';
    const password = 'starwars';
    const signUpError = page.querySelector('#sign-up-error');

    await signUp(page, name, email, password);

    expect(firebase.signUp).toHaveBeenCalledWith(name, email, password);
    expect(signUpError.innerHTML).toEqual('Ops, não foi possível criar um usuário!');
  });
});
