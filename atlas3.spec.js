import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto("https://app.go2atlas.com/version-test/account_login?lang=pt_br");

  const login=page.locator('#GEN_INPUT_ACCOUNT_LOGIN_EMAIL')
  await login.fill("thalesvicentelopes266@gmail.com")

  const senha=page.locator('#GEN_INPUT_ACCOUNT_LOGIN_PASSWORD')
  await senha.fill("AAAA!@#a1")

  const privacidad=page.getByRole('button', { name: 'Aceite tudo' })
  await privacidad.click();

  const logind=page.getByRole('button', { name: 'Log in' })
  await logind.click();
  await page.waitForTimeout(5000);
  
  const idioma=page.locator('#GEN_BTN_HOME_MENU');
  await idioma.click();
  await page.waitForTimeout(5000);
 const logout=page.getByRole('button', { name: 'Log out' });
await logout.click({ force: true });

await page.waitForTimeout(5000);






  

});

 
