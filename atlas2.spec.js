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
  const perfil=page.getByRole('button', { name: 'Atualizar perfil' })
  await perfil.click();
  await page.waitForTimeout(5000);
  const config=page.locator('#GEN_BTN_ACCOUNT_PROFILE_SETTINGS');
  await config.click();
  const idiomaDropdown = page.locator('#GEN_DROPDOWN_ACCOUNT_LANGUAGE');

 
  await idiomaDropdown.selectOption({ label: 'Inglês' });
  const salvar=page.getByRole('button', { name: 'Salvar' })
  await salvar.click()
  await page.waitForTimeout(10000);

  

  

});

 
