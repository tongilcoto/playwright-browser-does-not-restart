import { test, expect } from '@playwright/test';

test.describe('Example - Describe 1', () => {
  test('has title', async ({ browser }) => {
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('https://playwright.dev/');
  
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);
  })

  test.afterEach(async ({ browser }) => {
    await browser.close()
  })
})

test.describe('Example - Describe 2', () => {
  test('get started link', async ({ browser }) => {
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('https://playwright.dev/');

    // Click the get started link.
    await page.getByRole('link', { name: 'Get started' }).click();

    // Expects page to have a heading with the name of Installation.
    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  })
})
