import { test, expect, Locator } from '@playwright/test';
import { PlaywrightDevPage } from './variablesAm.spec';
import { iniciarUsuarios } from './iniciarSesion.spec';

test('Validar ingresado Registro', async ({ page }) => {
    const playwrightDev = new PlaywrightDevPage(page);
    await playwrightDev.registrar();
    //await expect(playwrightDev.creado).toContainText('InvalidPasswordException: Password did not conform with policy: Password must have lowercase characters');
    //await page.screenshot({ path: 'registrado.png'});
    await playwrightDev.page.close();
  });
  
test('Validar inicio de sesion', async ({ page }) => {
  const iniciar = new iniciarUsuarios(page);
  await iniciar.iniciarSesion(page);
  await iniciar.page.close();
 });