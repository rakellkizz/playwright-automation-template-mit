import { test, expect } from "@playwright/test";

test("Fluxo completo de compra", async ({ page }) => {
  await page.goto("/");

  await page.fill("#user-name", "standard_user");
  await page.fill("#password", "secret_sauce");
  await page.click("#login-button");

  await page.waitForSelector(".inventory_item");

  await page.locator(".inventory_item").first().click();
  await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');

  await page.click(".shopping_cart_link");

  await page.click('[data-test="checkout"]');
  await page.fill('[data-test="firstName"]', "Raquel");
  await page.fill('[data-test="lastName"]', "Souza");
  await page.fill('[data-test="postalCode"]', "12345");
  await page.click('[data-test="continue"]');

  await page.click('[data-test="finish"]');

  // CORREÇÃO DEFINITIVA
  await expect(page.locator(".complete-header")).toHaveText("Thank you for your order!");
});
