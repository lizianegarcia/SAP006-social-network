/**
 * @jest-environment jsdom
 */

import {
  describe, expect, it, jest,
} from '@jest/globals';
import createPage from '../../src/pages/login/index.js';
import { signIn } from '../../src/pages/login/signIn.js';
import { changePage } from '../../src/routes/changePage.js';
import firebase from '../../src/services/firebase.js';

jest.mock('../../src/services/firebase.js');
jest.mock('../../src/routes/changePage.js');

describe('signIn', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should signIn successful', async () => {
    const page = createPage();
    const email = 'babeyoda@sky.net';
    const password = 'mandalorian';

    await signIn(page, email, password);

    expect(firebase.signIn).toHaveBeenCalledWith(email, password);
    expect(changePage).toHaveBeenCalledWith('/');
  });

  it('should fail when signIn', async () => {
    firebase.signIn.mockRejectedValueOnce('any error');

    const page = createPage();
    const email = 'babeyoda@sky.net';
    const password = 'mandalorian';
    const signInError = page.querySelector('#sign-in-error');

    await signIn(page, email, password);

    expect(firebase.signIn).toHaveBeenCalledWith(email, password);
    expect(signInError.innerHTML).toEqual('Ops, não está autenticado.');
  });

  it('should not signUp when email is empty', async () => {
    const page = createPage();
    const password = 'mandalorian';
    const emailError = page.querySelector('#sign-in-email-error');

    await signIn(page, null, password);

    expect(firebase.signIn).not.toHaveBeenCalled();
    expect(changePage).not.toHaveBeenCalled();
    expect(emailError.innerHTML).toEqual('Ops, faltou seu email!');
  });

  it('should not signUp when password is empty', async () => {
    const page = createPage();
    const email = 'babeyoda@sky.net';
    const passwordError = page.querySelector('#sign-in-password-error');

    await signIn(page, email, null);

    expect(firebase.signIn).not.toHaveBeenCalled();
    expect(changePage).not.toHaveBeenCalled();
    expect(passwordError.innerHTML).toEqual('Ops, faltou sua senha');
  });
});
