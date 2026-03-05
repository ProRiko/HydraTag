import { test, expect } from "@playwright/test";

test.describe("HydraTag happy path", () => {
  test("home hero CTA renders and navigates", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { name: /custom water bottle/i })).toBeVisible();
    await page.getByRole("link", { name: /get instant quote/i }).click();
    await expect(page.locator("#instant-quote")).toBeInViewport();
  });

  test("services nav works", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: /^services$/i }).first().click();
    await expect(page).toHaveURL(/services/);
    await expect(page.getByRole("heading", { name: /boutique hydration branding/i })).toBeVisible();
  });
});
