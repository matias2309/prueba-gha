import { test, expect, Locator } from '@playwright/test';
import { PlaywrightDevPage } from './variablesAm.spec';
import { iniciarUsuarios } from './iniciarSesion.spec';

test('Validar ingresado Registro', async ({ page }) => {
    const playwrightDev = new PlaywrightDevPage(page);
    await playwrightDev.registrar();

    await playwrightDev.page.close();
  });
  
test('Validar inicio de sesion', async ({ page }) => {
  const iniciar = new iniciarUsuarios(page);
  await iniciar.iniciarSesion(page);
  await iniciar.page.close();
 });