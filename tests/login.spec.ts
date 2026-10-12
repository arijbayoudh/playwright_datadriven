import { test, expect } from '../fixtures/loginSetup'; 
import { LoginPage } from '../pages/LoginPage';

test.describe('Test Login Page',() => {

  test('LoginPass', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.assertLoginSuccess()
  });

 /* test('LoginFail', async ({ page }) => {
 const loginPage = new LoginPage(page);
    await loginPage.assertLoginFail()
  });
*/
});