import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  timeout: 60_000,
  retries: process.env.CI ? 2 : 0,
  expect: {
    timeout: 10_000
  },
  reporter: [["html", { open: "never" }], ["list"]],
  use: {
    baseURL: process.env.PLAYWRIGHT_BASE_URL || "http://localhost:3000",
    trace: "retain-on-failure"
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] }
    },
    {
      name: "mobile",
      use: { ...devices["Pixel 7"] }
    }
  ],
  webServer: process.env.CI
    ? {
        command: "pnpm dev",
        url: "http://localhost:3000",
        reuseExistingServer: !process.env.CI
      }
    : undefined
});
