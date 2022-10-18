import { test, expect, Locator } from '@playwright/test';
import { iniciarUsuarios } from './iniciarSesion.spec';
import { registrar } from './registrar.spec';
test('Validar ingresado Registro', async ({ page }) => {
  const registra = new registrar(page);
  await registra.agregar(page);
  await registra.page.close();

});
  
test('Validar inicio de sesion', async ({ page }) => {
  const iniciar = new iniciarUsuarios(page);
  await iniciar.iniciarSesion(page);
  await iniciar.page.close();
 });
