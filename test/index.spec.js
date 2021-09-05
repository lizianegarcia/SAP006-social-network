/**
 * @jest-environment jsdom
 */

import { describe, jest } from '@jest/globals';
import { signIn } from '../src/pages/login/signIn.js';
import createPage from '../src/pages/login/index.js';

jest.mock('../src/pages/login/signIn.js');

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

      expect(signIn).toHaveBeenCalledWith(email, password);
    });
  });
});
