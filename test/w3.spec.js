import { test } from '@playwright/test';

test('visit w3', async ({ page }) => {
  await page.goto('https://www.w3.org/');
});
