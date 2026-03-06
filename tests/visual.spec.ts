import { test, expect } from "@playwright/test";

const HERO_HEADING = /Custom Water Bottle Labels for Weddings, Restaurants & Corporate Events/i;
const SNAPSHOT_OPTIONS = {
  animations: "disabled" as const,
  timeout: 10000,
  maxDiffPixelRatio: 0.01
};

test.describe("HydraTag visual regression", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("hero section matches baseline", async ({ page }) => {
    const heroSection = page.locator("div.container").filter({ hasText: "Custom Water Bottle" }).first();
    await expect(page.getByRole("heading", { name: HERO_HEADING })).toBeVisible();
    await expect(heroSection).toHaveScreenshot("hero-section.png", SNAPSHOT_OPTIONS);
  });

  test("quote calculator section matches baseline", async ({ page }) => {
    const quoteSection = page.locator("#instant-quote");
    await quoteSection.scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: /WhatsApp-ready quote calculator/i })).toBeVisible();
    await expect(quoteSection).toHaveScreenshot("quote-calculator.png", SNAPSHOT_OPTIONS);
  });
});
