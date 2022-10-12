import { test, expect } from '@playwright/test';

test('Creacion de Usuario', async ({ page }) => {

  // Go to https://buggy.justtestit.org/register
  await page.goto('https://buggy.justtestit.org/register');

  // Click text=Buggy Rating
  await page.locator('text=Buggy Rating').click();
  await expect(page).toHaveURL('https://buggy.justtestit.org/');

  // Click a:has-text("Register")
  await page.locator('a:has-text("Register")').click();
  await expect(page).toHaveURL('https://buggy.justtestit.org/register');

  // Click input[name="username"]
  await page.locator('input[name="username"]').click();

  // Press CapsLock
  await page.locator('input[name="username"]').press('CapsLock');

  // Fill input[name="username"]
  await page.locator('input[name="username"]').fill('M');

  // Press CapsLock
  await page.locator('input[name="username"]').press('CapsLock');

  // Fill input[name="username"]
  await page.locator('input[name="username"]').fill('matias23099');

  // Click input[name="firstName"]
  await page.locator('input[name="firstName"]').click();

  // Fill input[name="firstName"]
  await page.locator('input[name="firstName"]').fill('matias');

  // Click input[name="lastName"]
  await page.locator('input[name="lastName"]').click();

  // Fill input[name="lastName"]
  await page.locator('input[name="lastName"]').fill('aros');

  // Click text=Password Password is required >> input[name="password"]
  await page.locator('text=Password Password is required >> input[name="password"]').click();

  // Fill text=Password Password is required >> input[name="password"]
  await page.locator('text=Password Password is required >> input[name="password"]').fill('86941818');

  // Press CapsLock
  await page.locator('text=Password Password is required >> input[name="password"]').press('CapsLock');

  // Fill text=Password Password is required >> input[name="password"]
  await page.locator('text=Password Password is required >> input[name="password"]').fill('86941818M');

  // Press CapsLock
  await page.locator('text=Password Password is required >> input[name="password"]').press('CapsLock');

  // Click div:has-text("Register with Buggy Cars Rating Login Login is required Login cannot be more tha") >> nth=1
  await page.locator('div:has-text("Register with Buggy Cars Rating Login Login is required Login cannot be more tha")').nth(1).click();

  // Triple click text=Password Password is required >> input[name="password"]
  await page.locator('text=Password Password is required >> input[name="password"]').click({
    clickCount: 3
  });

  // Fill text=Password Password is required >> input[name="password"]
  await page.locator('text=Password Password is required >> input[name="password"]').fill('');

  // Press CapsLock
  await page.locator('text=Password Password is required >> input[name="password"]').press('CapsLock');

  // Fill text=Password Password is required >> input[name="password"]
  await page.locator('text=Password Password is required >> input[name="password"]').fill('M');

  // Press CapsLock
  await page.locator('text=Password Password is required >> input[name="password"]').press('CapsLock');

  // Fill text=Password Password is required >> input[name="password"]
  await page.locator('text=Password Password is required >> input[name="password"]').fill('M86941818a');

  // Click input[name="confirmPassword"]
  await page.locator('input[name="confirmPassword"]').click();

  // Press CapsLock
  await page.locator('input[name="confirmPassword"]').press('CapsLock');

  // Fill input[name="confirmPassword"]
  await page.locator('input[name="confirmPassword"]').fill('M');

  // Press CapsLock
  await page.locator('input[name="confirmPassword"]').press('CapsLock');

  // Fill input[name="confirmPassword"]
  await page.locator('input[name="confirmPassword"]').fill('M86941818a');

  // Click button:has-text("Register")
  await page.locator('button:has-text("Register")').click();

  // Click button:has-text("Register")
  await page.locator('button:has-text("Register")').click();

  // Click button:has-text("Register")
  await page.locator('button:has-text("Register")').click();

});