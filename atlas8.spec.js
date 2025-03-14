import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto("https://app.go2atlas.com/version-test/account_login?lang=pt_br");

  
  const login = page.locator('#GEN_INPUT_ACCOUNT_LOGIN_EMAIL');
  await login.fill("thalesvicentelopes266@gmail.com");

  const senha = page.locator('#GEN_INPUT_ACCOUNT_LOGIN_PASSWORD');
  await senha.fill("AAAA!@#a1");

 
  const privacidad = page.getByRole('button', { name: 'Aceite tudo' });
  await privacidad.click();


  const logind = page.getByRole('button', { name: 'Log in' });
  await logind.click();
  await page.waitForTimeout(5000);

  const idioma = page.locator('#GEN_BTN_HOME_MENU');
  await idioma.click();
  const carrer = page.getByRole('button', { name: 'Career Finder' });
  await carrer.waitFor({ state: 'visible' });
  await carrer.click();
  await page.waitForTimeout(10000);

  /
  const interagir = page.getByRole('textbox', { name: 'Is there something on your mind?' });
  await interagir.click();


  const pagamento = page.locator('#SUR_BTN_PAYWALL_CONTINUE_673293ef979ca8eb65ce2bb7');
  await pagamento.click();
  await page.waitForTimeout(10000);

  const payWithCard = page.locator('[data-testid="card-accordion-item-button"]');
  await payWithCard.click();

  await payWithCard.waitFor({ state: 'visible' });

  await page.waitForTimeout(5000);
});