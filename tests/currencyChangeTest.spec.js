import { test, expect } from "@playwright/test";

test("test of changing the currency", async ({ page }) => {
  await page.goto("http://localhost:5173/main");
  const currencySelect = page.getByRole("combobox");

  await expect(currencySelect).toHaveValue("PLN");
  await expect(page.getByRole("link", { name: "Szpiliki 49zł" })).toBeVisible();

  await currencySelect.selectOption("USD");

  await expect(currencySelect).toHaveValue("USD");
  await expect(page.getByRole("link", { name: "Szpiliki 10$" })).toBeVisible();

  await page.reload();

  await expect(currencySelect).toHaveValue("USD");
  await expect(page.getByRole("link", { name: "Szpiliki 10$" })).toBeVisible();
});
