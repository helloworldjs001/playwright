// tests/interaction.spec.js

import { test, expect } from '@playwright/test';

test('should login successfully', async ({ page }) => {
    await page.goto('http://localhost:5173/login');
    await page.fill('input[name="username"]', 'testuser');
    await page.fill('input[name="password"]', 'password123');
    await page.click('button[type="submit"]');
    await expect(page).toHaveURL('http://localhost:5173');
});
