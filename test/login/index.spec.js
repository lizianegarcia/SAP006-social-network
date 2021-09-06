/**
 * @jest-environment jsdom
 */

import { beforeEach, describe, jest } from '@jest/globals';
import { signIn } from '../../src/pages/login/signIn.js';
import createPage from '../../src/pages/login/index.js';
import { signUp } from '../../src/pages/login/signUp.js';
import firebase from '../../src/services/firebase.js';
import { changePage } from '../../src/routes/changePage.js';

jest.mock('../../src/pages/login/signIn.js');
jest.mock('../../src/pages/login/signUp.js');
jest.mock('../../src/services/firebase.js');
jest.mock('../../src/routes/changePage.js');

describe('loginPage', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should be a function', () => {
    expect(typeof createPage).toBe('function');
  });

  describe('signIn', () => {
    it('should signIn correctly', () => {
      const email = 'chandlerbing@sky.net';
      const password = 'friends';
      const page = createPage();
      const emailInput = page.querySelector('#sign-in-email');
      const passwordInput = page.querySelector('#password1');
      const form = page.querySelector('#sign-in-form');

      emailInput.value = email;
      passwordInput.value = password;

      form.dispatchEvent(new Event('submit'));

      expect(signIn).toHaveBeenCalledWith(page, email, password);
    });
  });

  describe('signUp', () => {
    it('should signUp correctly', () => {
      const name = 'chandler bing';
      const email = 'chandlerbing@sky.net';
      const password = 'friends';
      const page = createPage();
      const nameInput = page.querySelector('#sign-up-username');
      const emailInput = page.querySelector('#sign-up-email');
      const passwordInput = page.querySelector('#password2');
      const msgSuccess = page.querySelector('#msgSuccess');
      const form = page.querySelector('#form-sign-up');

      nameInput.value = name;
      emailInput.value = email;
      passwordInput.value = password;

      nameInput.dispatchEvent(new Event('keyup'));
      emailInput.dispatchEvent(new Event('keyup'));
      passwordInput.dispatchEvent(new Event('keyup'));
      form.dispatchEvent(new Event('submit'));

      expect(msgSuccess.innerHTML).toEqual('<strong>Email enviado com sucesso...</strong>');
      expect(signUp).toHaveBeenCalledWith(page, name, email, password);
    });

    it('should not signUp when name is empty', () => {
      const email = 'chandlerbing@sky.net';
      const password = 'friends';
      const page = createPage();
      const emailInput = page.querySelector('#sign-up-email');
      const passwordInput = page.querySelector('#password2');
      const form = page.querySelector('#form-sign-up');

      emailInput.value = email;
      passwordInput.value = password;

      emailInput.dispatchEvent(new Event('keyup'));
      passwordInput.dispatchEvent(new Event('keyup'));
      form.dispatchEvent(new Event('submit'));

      expect(signUp).not.toHaveBeenCalled();
    });

    it('should not signUp when email is empty', () => {
      const name = 'chandler bing';
      const password = 'friends';
      const page = createPage();
      const nameInput = page.querySelector('#sign-up-username');
      const passwordInput = page.querySelector('#password2');
      const form = page.querySelector('#form-sign-up');

      nameInput.value = name;
      passwordInput.value = password;

      nameInput.dispatchEvent(new Event('keyup'));
      passwordInput.dispatchEvent(new Event('keyup'));
      form.dispatchEvent(new Event('submit'));

      expect(signUp).not.toHaveBeenCalled();
    });

    it('should not signUp when password is empty', () => {
      const name = 'chandler bing';
      const email = 'chandlerbing@sky.net';
      const page = createPage();
      const nameInput = page.querySelector('#sign-up-username');
      const emailInput = page.querySelector('#sign-up-email');
      const form = page.querySelector('#form-sign-up');

      nameInput.value = name;
      emailInput.value = email;

      nameInput.dispatchEvent(new Event('keyup'));
      emailInput.dispatchEvent(new Event('keyup'));
      form.dispatchEvent(new Event('submit'));

      expect(signUp).not.toHaveBeenCalled();
    });
  });

  describe('google Sign In', () => {
    it('should google Sign In correctly', async () => {
      const page = createPage();
      const googleSignInButton = page.querySelector('#sign-in-google');

      googleSignInButton.dispatchEvent(new Event('click'));

      await expect(firebase.signInSignUpWithGoogle).toBeCalled();
      await expect(changePage).toHaveBeenCalledWith('/');
    });
  });

  describe('google Sign Up', () => {
    it('should google Sign Up correctly', async () => {
      const page = createPage();
      const googleSignUpButton = page.querySelector('#sign-up-google');

      googleSignUpButton.dispatchEvent(new Event('click'));

      await expect(firebase.signInSignUpWithGoogle).toBeCalled();
      await expect(changePage).toHaveBeenCalledWith('/');
    });
  });

  describe('forgot password', () => {
    it('should forgot password correctly', async () => {
      const page = createPage();
      const forgotPasswordBtn = page.querySelector('#forgotPassword');

      forgotPasswordBtn.dispatchEvent(new Event('click'));

      await expect(changePage).toHaveBeenCalledWith('/reset-password');
    });
  });
});
