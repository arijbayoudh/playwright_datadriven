import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { PageActions } from '../actions/PageActions';
import loginData from '../data/loginData.json';

import ENV from '../utils/config';

const env = process.env.ENV ?? 'prod' as const;
const CONFIG = ENV['prod'];

export { expect };

type MyFixtures = {
  logInSetup: void;
};

export const test = base.extend<MyFixtures>({
  logInSetup: [
    async ({ page }, use) => {

      const actions = new PageActions(page);
      const loginPage = new LoginPage(page);

      console.log('--- 🟢 SETUP: Connexion utilisateur ---');

      await actions.goto(`${CONFIG.baseURL}/login`);
      await loginPage.login(loginData.validUser.email,loginData.validUser.password);
      await loginPage.assertLoginSuccess();
     
      //await actions.goto(`${CONFIG.baseURL}/login`);
      //await loginPage.login(loginData.invalidUser.email,loginData.invalidUser.password);
      //await loginPage.assertLoginSuccess();

      await use();
    },

    // Scope = test → exécuté avant CHAQUE test
    { scope: 'test', auto: true }
  ],
}); 