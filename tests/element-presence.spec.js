// tests/element-presence.spec.js

import { test, expect } from '@playwright/test';

test('should display the main heading', async ({ page }) => {
    await page.goto('http://localhost:5173');
    const mainHeading = await page.locator('h1');
    await expect(mainHeading).toHaveText('Welcome to Your App');
});

test('should have a login button', async ({ page }) => {
    await page.goto('http://localhost:5173/login');
    const loginButton = await page.locator('button[type="submit"]');
    await expect(loginButton).toBeVisible();
});
