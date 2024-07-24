// tests/navigation.spec.js

import { test, expect } from '@playwright/test';

test('should navigate to the main page', async ({ page }) => {
    await page.goto('http://localhost:5173');
    await expect(page).toHaveTitle("Vite + React");
});
