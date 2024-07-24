// tests/form-submission.spec.js

import { test, expect } from '@playwright/test';

test('should submit the contact form and show an alert', async ({ page }) => {
    await page.goto('http://localhost:5173/contact');
    await page.fill('input[name="name"]', 'John Doe');
    await page.fill('input[name="email"]', 'john.doe@example.com');
    await page.fill('textarea[name="message"]', 'Hello, this is a test message.');

    // Listen for the alert dialog
    page.once('dialog', async dialog => {
        expect(dialog.type()).toBe('alert');
        expect(dialog.message()).toBe('Your message has been sent successfully!');
        await dialog.accept();
    });

    await page.click('button[type="submit"]');
});
