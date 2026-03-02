import { test, expect } from '@playwright/test';

test.describe('EPAM Client Work scenario', () => {
  test('Navigate to Client Work via Services', async ({ page }) => {
    await page.goto('https://www.epam.com/');

    // Click "Services" in header
    const servicesLink = page.getByRole('link', { name: 'Services' });
    await servicesLink.click();

    // Click "Explore Our Client Work" link
    const exploreLink = page.getByRole('link', { name: /Explore Our Client Work/i });
    await exploreLink.waitFor({ state: 'visible', timeout: 10000 });
    await exploreLink.click();

    // Assert "Client Work" text is visible on the resulting page
    const clientWorkHeading = page.getByText(/Client Work/i);
    await expect(clientWorkHeading).toBeVisible({ timeout: 10000 });
  });
});
