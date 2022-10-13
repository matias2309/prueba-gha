import { test, expect, type Page } from '@playwright/test';

test('Validar ingresado Registro', async ({ page }) => {
    await page.goto('https://buggy.justtestit.org/register');
  });