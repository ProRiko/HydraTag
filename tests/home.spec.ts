import { test, expect } from "@playwright/test";

test.describe("HydraTag Studio homepage", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("homepage renders successfully", async ({ page }) => {
    await expect(page).toHaveTitle(/HydraTag Studio/i);
    await expect(page.locator("main")).toBeVisible();
  });

  test("hero heading is visible", async ({ page }) => {
    await expect(
      page.getByRole("heading", {
        name: /Custom Water Bottle Labels for Weddings, Restaurants & Corporate Events/i
      })
    ).toBeVisible();
  });

  test("quote calculator section is rendered", async ({ page }) => {
    await expect(page.locator("#instant-quote")).toBeVisible();
    await expect(
      page.getByRole("heading", { name: /WhatsApp-ready quote calculator/i })
    ).toBeVisible();
  });

  test("WhatsApp call-to-action is present", async ({ page }) => {
    await expect(page.getByRole("link", { name: "Chat on WhatsApp" }).first()).toBeVisible();
  });

  test("services section lists offerings", async ({ page }) => {
    const servicesSection = page.locator("#services");
    await expect(servicesSection).toBeVisible();
    await expect(servicesSection.locator("h3").first()).toBeVisible();
  });
});
