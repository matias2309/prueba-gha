import { test, expect, type Page } from '@playwright/test';

test('Validar ingresado Registro', async ({ page }) => {
    await page.goto('https://buggy.justtestit.org/register');
  // Click [placeholder="Login"]
  await page.locator('[placeholder="Login"]').click();
  await page.locator('[placeholder="Login"]').fill('matiasAros');
  // Click text=Login Register >> input[name="password"]
  await page.locator('text=Login Register >> input[name="password"]').click();
  await page.locator('text=Login Register >> input[name="password"]').fill('A86941818m"#');

 
  // Close page
  await page.close();
  });
  