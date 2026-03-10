import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://localhost:5173/main");
  await page.getByRole("link", { name: "Clothes" }).click();
  await page.getByRole("link", { name: "Footwear arrow" }).click();
  await page.getByRole("link", { name: "Sneakers" }).click();
  await page.getByRole("link", { name: "Sports" }).click();
  await page.getByRole("link", { name: "Elegant" }).click();
  await page.getByRole("link", { name: "Clothes arrow" }).click();
  await page.getByRole("link", { name: "T-shirts" }).click();
  await page.getByRole("link", { name: "Sweaters" }).click();
  await page.getByRole("link", { name: "Pants" }).click();
  await page.getByRole("link", { name: "Różowe pants 599zł" }).first().click();
  await page.getByRole("link", { name: "Women" }).click();
  await page.getByRole("link", { name: "Clothes" }).click();
  await page.getByRole("link", { name: "Footwear arrow" }).click();
  await page.getByRole("link", { name: "Heels 49zł" }).first().click();
  await page.getByRole("button", { name: "Add to Cart" }).click();
  await page.getByRole("link", { name: "2" }).click();
  await expect(
    page
      .locator("div")
      .filter({ hasText: /^Test producer Heels49złPrice: 49złRemove$/ })
      .nth(1),
  ).toBeVisible();
});
